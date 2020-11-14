import React, { useState } from "react";
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


export interface MyProps {
  exercise: Exercise;
  auth: { Authorization: string };
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
  const classes = useStyles();
  const [data, setData] = useState({
    sequence: props.exercise.sequence_number, points: props.exercise.max_points-props.exercise.sequence_number,
    order: props.exercise.category_ord, task: props.exercise.description,
    attachments: props.exercise.attachments, title: props.exercise.title,
    exercise_uuid: props.exercise.uuid
  });
  const [refresh, setRefresh] = useState(false);

  const completestring = `<latex-js hyphenate="false">${data.task}
</latex-js>`;
  return <MainBox mainTitle={`${data.order + 1}.feladat: ${data.title}`} subTitle={`${data.sequence + 1}. próba, ${data.points} pontért`}>
    <div dangerouslySetInnerHTML={{ __html: completestring }} />
    {data.attachments.map(element => {
      return <img src={element.uri} style={{maxWidth:'80%', display: 'flex', marginLeft:'auto', marginRight: 'auto'}}/>;
    })}
    <Divider variant="middle" style={{ marginTop: '10px', marginBottom: '10px' }} />
    <Form initialValues={{ result: '' }} validationSchema={Yup.object().shape({
      result: Yup.number('Számot kell írnod').min(1, 'A válasz 1 és 9999 között van').max(9999, 'A válasz 1 és 9999 között van').required('Nem írtál semmi választ!')
    })}
      onSubmit={async (values) => {
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
          alert((await result.json() as any)?.error || 'Hiba a beküldés során!');
          values.result = '';
          setRefresh(!refresh)
          return;
        }
        const next = await result.json();
        const exercise = next?.next;
        if(next?.submission?.guess_correct){
          alert('A válasz helyes volt')
        }else{
          alert('A válasz nem volt jó')
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
            exercise_uuid: 'asdas'
          })
        }
        values.result = '';
        setRefresh(!refresh)
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
        <MyButton type="submit" className={classes.input} label="Beküld" />
      </div>
    </Form>
  </MainBox>;
}