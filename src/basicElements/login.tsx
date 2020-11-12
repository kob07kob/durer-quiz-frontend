import React, { useState } from "react";
import { Button, Divider, Link, makeStyles, Snackbar, TextField } from '@material-ui/core';
import Form from './form/form';
import * as Yup from 'yup';
import Field from './form/field';
import { LabelType, MyTextInput } from "./mytext-input";
import { MyButton } from "./mybutton";
import { useLogin } from "./user-hooks/user-hooks";
import { useSnackbar } from 'notistack';
import { WebshopPicture } from "./picture-component";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: '30px 60px',
    borderRadius: '30px',
    color: theme.palette.secondary.contrastText,
    marginTop: '-70px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down(700)]: {
        marginLeft: '7px',
        marginRight: '7px',
        width: 'calc(100% - 14px)',
    },
    [theme.breakpoints.down(1000)]: {
        marginTop: '-5px',
    }
  },
  formDiv: {
    width: 'calc(100% - 20px)',
    display: 'flex',
    marginLeft: '10px',
    flexFlow: 'column',
    marginRight: '10px',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingBottom: '10px',
  },
  element: {
    width: '100%',
    marginBottom: '20px',
  },
  picture: {
    width: '550px',
    position: 'relative',
    zIndex: 1,
    marginLeft: '55%',
    marginTop: '-200px'
  },
  link: {
    alignSelf: 'start',
    color: '#3B2E2E',
    cursor: 'pointer',
    textDecoration: 'underline',
    ['&:hover']:{
      color: '#707070'
    }
  }
}))

export const Login = () => {
const [forgotPass, setForgotPass] = useState(0);
const { enqueueSnackbar } = useSnackbar();
const classes = useStyles();
const login= useLogin();
return <div className={classes.root} style={{maxHeight: '400px'}}>
  {forgotPass==0 && <Form style={{position: "relative", zIndex: 2}} initialValues={{email:'', password: ''}} validationSchema={Yup.object().shape({
            email: Yup.string().required('email kitöltése kötelező'),
          })}
                  onSubmit={async (values) => {
                    const res = await login(values.email, values.password);
                    if(res){
                      enqueueSnackbar(res, { variant: 'error' });
                    }
                  }}>
                  <div className={classes.formDiv}>
                  <Field name="email"
                         type="text"
                         component={MyTextInput}
                         label="Felhasznlónév"
                         otherProps = {{labelWhere: LabelType.Above}}
                         className = {classes.element}
                  />
                  <Field name="password"
                         type="password"
                         component={MyTextInput}
                         label="jelszó"
                         otherProps = {{labelWhere: LabelType.Above}}
                         className = {classes.element}
                  />
                  <MyButton type="submit" label="Belépés" 
                         className = {classes.element}/>
                  <a className={classes.link} onClick={()=>{setForgotPass(1)}}>
                    Elfelejtettem a jelszavam
                  </a>
                  </div>
          </Form>}
          {forgotPass==1 && <Form style={{position: "relative", zIndex: 2}} initialValues={{email:''}} validationSchema={Yup.object().shape({
            email: Yup.string()
            .email('Érvénytelen email formátum')
            .required('Email szükséges'),
          })}
                  onSubmit={async (values) => {
                    alert('ez nincs implementálva')
                  }}>
                  <div className={classes.formDiv}>
                  <Field name="email"
                         type="text"
                         component={MyTextInput}
                         label="E-mail"
                         otherProps = {{labelWhere: LabelType.Above}}
                         className = {classes.element}
                  />
                  <MyButton type="submit" label="Küldés" 
                         className = {classes.element}/>
                  <a className={classes.link} onClick={()=>{setForgotPass(0)}}>
                    vissza a bejelentkezéshez
                  </a>
                  </div>
          </Form>}
          <WebshopPicture className={classes.picture} picture={{webPUrl: '/logo_kicsik_nagyok.png', jpegOrPngUrl: '/logo_kicsik_nagyok.png', alt: 'login', title: 'login'}}/>
      </div>;
}