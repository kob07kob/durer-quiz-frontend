import React, { Dispatch, useState } from "react";
import { makeStyles } from '@material-ui/core';
import { MyButton } from "./mybutton";
import { useSnackbar } from 'notistack';
import { WebshopPicture } from "./picture-component";
import { startGame } from "./backend-calls";
import { useAuthHeader } from './user-hooks/user-hooks';
import { Exercise, Team } from './backend-types';
import { getCurrentExercise, getTeam } from './backend-calls';
import moment from 'moment';


/*
TODO:
    - style was only yanked, may looks bad - alright now
    - manage user state - relay done (strategias redirect nedded)
    - wire callbaclks to backend - team starts timer with clicking on valto
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
      zIndex: 2,
      position: 'relative',
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

  interface Props {
    team: Team;
    setTeam: Dispatch<Team>;
    setExcercise: Dispatch<Exercise>;
    inProgress: boolean;
  }


  export const Splash = (props: Props) => {
    const authHeader = useAuthHeader();
    const [loading, setLoading]= useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();
    const startValto = ()=>{
      setLoading(true);
      startGame(authHeader).then(result=>{
        if(result){
          enqueueSnackbar(result);
          setLoading(false);
          return;
        }
        getTeam(authHeader).then(team => {
          if (team !== null)
            props.setTeam(team)
        });
        getCurrentExercise(authHeader).then(exc => {
          if (exc !== null)
            props.setExcercise(exc);
        });
        setLoading(false);
      }).catch(e=>{
        enqueueSnackbar('Ismeretlen hiba');
        setLoading(false);
      });
      
    };
    const relayFinished = props.team?.ends_at?.isBefore(moment.now()) || !props.inProgress;
    return <div className={classes.root} style={{maxHeight: '400px'}}>
            {<div className={classes.formDiv}>
                <MyButton type="button" label="Stratégiás" loading={loading}
                        className = {classes.element}/>
                <MyButton type="button" label={relayFinished?"A váltó már nem elérhető":"Váltó"} loading={loading}
                        className = {classes.element} onClick={startValto} disabled={relayFinished}/>
            </div>}
            <WebshopPicture className={classes.picture} picture={{webPUrl: '/logo.svg', jpegOrPngUrl: '/logo.svg', alt: 'login', title: 'login'}}/>
          </div>;
    }