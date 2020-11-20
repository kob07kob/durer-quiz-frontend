import React, { useEffect, useState } from "react";
import { MainBox } from "./main-box";
//import Latex from 'react-latex-next';
import { Divider, makeStyles } from '@material-ui/core';
import Form from './form/form';
import * as Yup from 'yup';
import Field from './form/field';
import { LabelType, MyTextInput } from "./mytext-input";
import { MyButton } from "./mybutton";
import { Exercise, Submission } from "./backend-types";
import { serverUrl } from "../constants";
import { useSnackbar } from "notistack";
import { ResultPage } from "./result-page";
import moment from "moment";


export interface MyProps {
  exercise: Exercise;
  auth: { Authorization: string };
  endsAt: moment.Moment;
  teamName: string;
  setInfo: (val:boolean)=>any;
}

const useStyles = makeStyles(theme => ({
  formDiv: {
    display: 'flex',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingBottom: '10px',
  },
  input: {
    width: '50%',
    [theme.breakpoints.down(650)]: {
      marginBottom: '15px',
      width: '100%',
    }
  },
  button: {
    width: '50%',
    [theme.breakpoints.down(650)]: {
      width: '100%',
    }
  }
}))

export const Excercise: React.FunctionComponent<MyProps> = (props: MyProps) => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    sequence: props.exercise.sequence_number, points: props.exercise.max_points-props.exercise.sequence_number,
    order: props.exercise.category_ord, task: props.exercise.description,
    attachments: props.exercise.attachments, title: props.exercise.title,
    exercise_uuid: props.exercise.uuid
  });
  const [refresh, setRefresh] = useState(false);
  const [timeLeftString, setTimeLeftString] = useState('');
  const [timerStarted, setTimerStarted] = useState(false);
  const [triesForTask, setTriesForTask] = useState([] as number[]);

  const counter = (end:moment.Moment)=> {
    const secs = end.diff(moment.now(), "seconds")
    setTimeLeftString(`${Math.floor(secs/60)} : ${secs%60}`);
  }
  useEffect(()=>{
    if(!timerStarted&&props.endsAt){
      setInterval(counter, 1000, props.endsAt);
      setTimerStarted(true);
    }
  }, [props.endsAt])
  const completestring = `<latex-js hyphenate="false">${data.task}
</latex-js>`;
  if(!data.exercise_uuid){
    return <ResultPage endsAt={props.endsAt} teamName={props.teamName} setInfo={props.setInfo}/>;
  }
  //const timeLeftString = props.endsAt.diff(moment.now(), "seconds");
  return <MainBox mainTitle={`${data.order + 1}.feladat: ${data.title} ${props.endsAt.isAfter(moment.now())?`Hátralévő idő: ${timeLeftString}`:'Lejárt az idő'}`} subTitle={`${data.sequence + 1}. próba, ${data.points} pontért`}>
    <div dangerouslySetInnerHTML={{ __html: completestring }} />
    {data.attachments?.map(element => {
      return <img src={element.uri} style={{maxWidth:'80%', display: 'flex', marginLeft:'auto', marginRight: 'auto'}} alt={'feladatKép (ha nem töltött be próbáld frissíteni az oldalt)'}/>;
    })}
    <Divider variant="middle" style={{ marginTop: '10px', marginBottom: '10px' }} />
    <Form initialValues={{ result: '' }} validationSchema={Yup.object().shape({
      result: Yup.number().integer('Egész számot kell írni').typeError('Számot kell írnod').min(1, 'A válasz 1 és 9999 között van').max(9999, 'A válasz 1 és 9999 között van').required('Nem írtál semmi választ!')
    })}
      onSubmit={async (values) => {
        setLoading(true);
        if(triesForTask.includes(values.result)){
          enqueueSnackbar('Ezt a választ már próbáltátok', { variant: 'error' });
          setLoading(false);
          return;
        }
        const result = await fetch(`${serverUrl}/submit`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', ...props.auth },
          body: JSON.stringify({
            exercise_uuid: data.exercise_uuid,
            guess: values.result,
            sequence: data.sequence,
          }),

        });
        if (!result.ok) {
          enqueueSnackbar((await result.json() as any)?.error || 'Hiba a beküldés során!', { variant: 'error' });
          values.result = '';
          setRefresh(!refresh)
          return;
        }
        const next = await result.json();
        const exercise = next?.next;
        if(next?.submission?.guess_correct){
          setTriesForTask([] as number[]);
          enqueueSnackbar('A válasz helyes volt', { variant: 'success' });
        }else{
          if(exercise?.uuid === data.exercise_uuid){
            const tries = triesForTask;
            tries.push(values.result);
            setTriesForTask(tries);
          } else {
            setTriesForTask([] as number[]);
          }
          enqueueSnackbar('A válasz sajnos nem volt jó', { variant: 'error' });
        }
        if(exercise?.title){
          setData({
            sequence: exercise.sequence_number, points: exercise.max_points-exercise.sequence_number,
            order: exercise.category_ord, task: exercise.description,
            attachments: exercise.attachments || [], title: exercise.title,
            exercise_uuid: exercise.uuid
          })
        }
        else{
          setData({
            sequence: 0, points: 0,
            order: 0, task: `Végig értetek a feladatokon`,
            attachments: [], title: '',
            exercise_uuid: ''
          })
        }
        values.result = '';
        setRefresh(!refresh)
        setLoading(false);
      }}>
      <div className={classes.formDiv}>
        <Field name="result"
          key={`resInput${refresh}`}
          type="text"
          component={MyTextInput}
          label="Válasz:"
          otherProps={{ labelWhere: LabelType.Inline }}
          className={classes.input}
        />
        <MyButton type="submit" className={classes.input} label="Beküld" loading ={loading}/>
      </div>
    </Form>
  </MainBox>;
}