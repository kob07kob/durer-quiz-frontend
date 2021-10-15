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
import { sendEmail } from "./backend-calls";


/*
TODO:
    - style was only yanked, may looks bad
    - manage user state
    - wire callbaclks to backend
*/

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      padding: '30px 60px',
      borderRadius: '30px',
      color: theme.palette.secondary.contrastText,
      marginTop: '-120px',
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


  export const Splash = () => {
    const [forgotPass, setForgotPass] = useState(0);
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();
    return <div className={classes.root} style={{maxHeight: '400px'}}>
            {<div className={classes.formDiv}>
                <MyButton type="button" label="Stratégiás" loading={loading}
                        className = {classes.element}/>
                <MyButton type="button" label="Váltó" loading={loading}
                        className = {classes.element}/>
            </div>}
              <WebshopPicture className={classes.picture} picture={{webPUrl: '/logo_kicsik_nagyok.png', jpegOrPngUrl: '/logo_kicsik_nagyok.png', alt: 'login', title: 'login'}}/>
          </div>;
    }