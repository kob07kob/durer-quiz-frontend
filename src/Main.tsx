import React, { useEffect, useState } from 'react';
import './App.css';
import { getCategory, getCurrentExercise, getTeam } from './basicElements/backend-calls';
import { Category, Exercise, Team } from './basicElements/backend-types';
import { Excercise } from './basicElements/Excercise';
import { Infos } from './basicElements/infos';
import { Layout } from './basicElements/layout';
import { Login } from './basicElements/login';
import { LoadUserOnClientSide } from './basicElements/user-hooks/user-atom';
import { useAuthHeader, useCurrentUser } from './basicElements/user-hooks/user-hooks';
import { OneTimeTokenLogin } from './basicElements/ott-login';
import {
  useLocation,
} from "react-router-dom";
import moment from 'moment';
import GoogleAnalytics from './basicElements/googleanalitics';
import { Splash } from './basicElements/splash';
import { CurrentUser } from "./basicElements/user-hooks/types";


function Main() {
  const [info, setInfo] = useState(true);
  const [team, setTeam] = useState({ uuid: '', email: '', name: '' } as Team);
  const [exercise, setExercise] = useState({} as Exercise); //{uuid: 'dsaads', sequence_number: 0, category_ord: 0, category_uuid: '', description:'dasdads asdads', title:'dasasd', max_points: 3}
  const [category, setCategory] = useState({} as Category);
  const tokenGetter = new URLSearchParams(useLocation().search);
  const token = tokenGetter.get("one-time-auth")
  const authHeader = useAuthHeader();
  const user = useCurrentUser();
  useEffect(() => {
    if (user) {
      getTeam(authHeader).then(team => {
        if (team !== null)
          setTeam(team)
      });
      getCategory(authHeader, user.categoryUuid).then(cat => {
        if (cat !== null)
          setCategory(cat)
      });
      getCurrentExercise(authHeader).then(exc => {
        if (exc !== null)
          setExercise(exc);
      });
    }
  }, [user]);
  if (token) {
    return (
      <Layout>
        <OneTimeTokenLogin token={token} />
      </Layout>
    )
  }
  const type = getReactComponent(user, category, team);
  return (
    <Layout>
      <GoogleAnalytics identifier={'G-SZ3DY6CGPS'} />
      <LoadUserOnClientSide />
      {type===MainComponentType.Login && <Login />}
      {type===MainComponentType.Splash && <Splash />}
      {type===MainComponentType.Infos && <Infos exercise={exercise} setExercise={setExercise} teamFinished={team.starts_at?.isBefore(moment.now()) || false} teamInProgress={exercise?.category_ord > 0} setInfo={setInfo} teamName={team.name} categoryName={category.name} categoryEnd={team.ends_at || null} categoryStart={team.starts_at || null} />}
      {type===MainComponentType.Excercise && <Excercise auth={authHeader} exercise={exercise} endsAt={team?.ends_at || null} teamName={team.name} setInfo={setInfo} />}
      {/*!user && <Login />}*/}
      {/*TODO add user state management logic as separated function
      current logic is flawed, as it wont let you return to the splash screen*/}
      {/*user && info && (!team.starts_at || !team.ends_at) && <Login />}//splach screen
      {user && info && team.starts_at && team.ends_at && <Infos exercise={exercise} setExercise={setExercise} teamFinished={team.starts_at?.isBefore(moment.now())} teamInProgress={exercise?.category_ord > 0} setInfo={setInfo} teamName={team.name} categoryName={category.name} categoryEnd={team.ends_at} categoryStart={team.starts_at} />}
  {user && !info && team.starts_at && team.ends_at && <Excercise auth={authHeader} exercise={exercise} endsAt={team?.ends_at} teamName={team.name} setInfo={setInfo} />*/}
    </Layout>
  );
}

// TODO_code-style move these to different files

enum MainComponentType {
  Login, Splash, Infos, Excercise
}

function getReactComponent(user: CurrentUser | null, category: Category, team: Team, t = moment.now()): MainComponentType {
  if (!user || !team) return MainComponentType.Login;
  if (!team.starts_at) {
    return MainComponentType.Splash;
  }
  if (category?.global_starts_at.isAfter(t) && team?.ends_at?.isBefore(t)){
    return MainComponentType.Infos
  }
  if(team?.ends_at?.isBefore(t)){
    return MainComponentType.Excercise;
  }
  return MainComponentType.Infos;
}

export default Main;
