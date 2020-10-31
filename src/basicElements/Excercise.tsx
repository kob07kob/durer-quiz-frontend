import React, { useState } from "react";
import { MainBox } from "./main-box";
import Latex from 'react-latex-next';
import { Button, Divider, makeStyles, TextField } from '@material-ui/core';
import Form from './form/form';
import * as Yup from 'yup';
import Field from './form/field';
import { LabelType, MyTextInput } from "./mytext-input";
import { MyButton } from "./mybutton";


export interface MyProps {
    numOfExcercise: number;
    numOfTries: number;
    pointsAvarded: number;
    text: string;
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
    [theme.breakpoints.down(650)]:{
      marginBottom: '15px',
      width: '100%',
    }
  },
  button: {
    width: '50%',
    [theme.breakpoints.down(650)]:{
      width: '100%',
    }
  }
}))

export const Excercise: React.FunctionComponent<MyProps> = (props: MyProps) => {
const classes = useStyles();
const [task, setTask] = useState(props.text);
const [numOfExcercise, setNumOfExcercise] = useState(props.numOfExcercise);
const [numOfTries, setNumOfTries] = useState(props.numOfTries);
const [pointsAvarded, setPointsAvarded] = useState(props.pointsAvarded);
return <MainBox mainTitle={`${numOfExcercise}.feladat`} subTitle={`${numOfTries}. próba, ${pointsAvarded} pontért`}>
          <Latex>{task}</Latex>
          <Divider variant="middle" style={{marginTop: '10px', marginBottom: '10px'}}/>
          <Form initialValues={{result:''}} validationSchema={Yup.object().shape({
            result: Yup.string().required('Nem írtál semmi választ!')
          })}
                  onSubmit={async (values) => {
                    if(values.result === '42'){
                      setTask('Sikeresen válaszoltál a jelenlegi egyetlen kerdesre :)');
                      setNumOfExcercise(numOfExcercise+1);
                      setNumOfTries(1);
                      setPointsAvarded(6);
                    }
                    else{
                      setNumOfTries(numOfTries+1);
                      setPointsAvarded(pointsAvarded-1);
                    }
                  }}>
                  <div className={classes.formDiv}>
                  <Field name="result"
                         type="text"
                         component={MyTextInput}
                         label="Válasz:"
                         otherProps = {{labelWhere: LabelType.Inline}}
                         className = {classes.input}
                  />
                  <MyButton type="submit" className = {classes.input} label="Beküld"/>
                  </div>
          </Form>
      </MainBox>;
}