import React from "react";
import { makeStyles } from '@material-ui/core';
import { WebshopPicture } from "./picture-component";
import { MyButton } from "./mybutton";
import moment from 'moment';
import { useLogout } from "./user-hooks/user-hooks";

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
    alignItems: 'left',
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

export interface Props{
  teamName:string;
  categoryName: string;
  categoryStart: moment.Moment;
  categoryEnd: moment.Moment;
  setInfo: (val:boolean)=>any;
}

export const Infos = (props:Props) => {
const logout = useLogout();
const classes = useStyles();
let now = moment()
let enabled = props.categoryStart && props.categoryEnd && props.categoryStart.isBefore(now) && props.categoryEnd.isAfter(now)

return <div className={classes.root} style={{maxHeight: '400px'}}>
  <div style={{position: "relative", zIndex: 2}}>
                  <div className={classes.formDiv}>
                    <div>Csapatnév: {props.teamName}</div>
                    <div>Kategória: {props.categoryName}</div>
                    <div>Kitöltés kezdete: {props.categoryStart?.calendar()}</div>
                    <div>Kitöltés vége: {props.categoryEnd?.calendar()}</div>
                      <MyButton type='button' label="Kitöltés megkezdése" onClick={(event:any)=>{props.setInfo(false)}}
                          className = {classes.element} disabled={!enabled}/>
                  <a className={classes.link} onClick={()=>{logout()}}>
                    Kijelentkezés
                  </a>
                  </div>
                </div>
          <WebshopPicture className={classes.picture} picture={{webPUrl: '/logo_kicsik_nagyok.png', jpegOrPngUrl: '/logo_kicsik_nagyok.png', alt: 'login', title: 'login'}}/>
      </div>;
}