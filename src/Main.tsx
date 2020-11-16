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

function Main() {
  const [info, setInfo] = useState(true);
  const [team, setTeam] = useState({ uuid: '', email: '', name: '' } as Team);
  const [exercise, setExercise] = useState({} as Exercise);
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
      <LoadUserOnClientSide/>
      {!user && <Login />}
      {user && info && <Infos teamInProgress={exercise?.category_ord > 1} setInfo={setInfo} teamName={team.name} categoryName={category.name} categoryEnd={category.ends_at} categoryStart={category.starts_at}/>}
      {user && !info && <Excercise auth={authHeader} exercise={exercise} />}
    </Layout>
  );
}

export default Main;
