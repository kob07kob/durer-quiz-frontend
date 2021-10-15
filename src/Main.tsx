import React, { useEffect, useState } from 'react';
import './App.css';
import { getCategory, getCurrentExercise, getTeam } from './basicElements/backend-calls';
import { Category, Exercise, Team } from './basicElements/backend-types';
import { Excercise } from './basicElements/Excercise';
import { Infos } from './basicElements/infos';
import { Layout } from './basicElements/layout';
import { Login } from './basicElements/login';
import { LoadUserOnClientSide } from './basicElements/user-hooks/user-atom';
//import Latex as Latex from 'react-latex';
import { useAuthHeader, useCurrentUser } from './basicElements/user-hooks/user-hooks';
import { OneTimeTokenLogin } from './basicElements/ott-login';
import { 
  useLocation,
} from "react-router-dom";
import moment from 'moment';
import GoogleAnalytics from './basicElements/googleanalitics';
import { testModeAPI } from 'react-ga';
import { Splash } from './basicElements/splash';

function Main() {
  const [info, setInfo] = useState(true);
  const [team, setTeam] = useState({ uuid: '', email: '', name: ''} as Team);
  const [exercise, setExercise] = useState({} as Exercise); //{uuid: 'dsaads', sequence_number: 0, category_ord: 0, category_uuid: '', description:'dasdads asdads', title:'dasasd', max_points: 3}
  const [category, setCategory] = useState({} as Category);
  const tokenGetter= new URLSearchParams(useLocation().search);
  const token = tokenGetter.get("one-time-auth")
  const authHeader = useAuthHeader();
  const user = useCurrentUser();
  useEffect(() => {
    if (user) {
      getTeam(authHeader).then(team => {
        if(team!==null)
          setTeam(team)
      });
      getCategory(authHeader, user.categoryUuid).then(cat => {
        if(cat!==null)
          setCategory(cat)
      });
      getCurrentExercise(authHeader).then(exc => {
        if(exc!==null)
          setExercise(exc);
      });
    }
  }, [user]);
  if(token){
    return (
      <Layout>
        <OneTimeTokenLogin token = {token}/>
      </Layout>
    )
  }
  return (
    <Layout>
      <GoogleAnalytics identifier={'G-SZ3DY6CGPS'}/>
      <LoadUserOnClientSide/>
      {!user && <Login />}
      /*TODO add user state management logic as separated function
        current logic is flawed, as it wont let you return to the splash screen*/
      {user &&  info && (!team.starts_at || !team.ends_at) && <Login/>}//splach screen
      {user &&  info &&   team.starts_at &&  team.ends_at  && <Infos exercise={exercise} setExercise={setExercise} teamFinished={team.starts_at?.isBefore(moment.now())} teamInProgress={exercise?.category_ord > 0} setInfo={setInfo} teamName={team.name} categoryName={category.name} categoryEnd={team.ends_at} categoryStart={team.starts_at}/>}
      {user && !info &&   team.starts_at &&  team.ends_at  && <Excercise auth={authHeader} exercise={exercise} endsAt={team?.ends_at} teamName={team.name} setInfo={setInfo}/>}
    </Layout>
  );
}

function pseudo_statemachine(t = moment.now()){
  let user,team:Team;
  if(!user) Login
  else{
    if (team?.starts_at === null)
      Splash; // (two selection: váltó / stratégiás -> redirects to a different page, which again redirects)
    else if(team?.begins_at.isAfter(t))
      Infos
    else if(team?.ends_at.isAfter(t))
      Excercise
    else
      Infos
  }
}

export default Main;
