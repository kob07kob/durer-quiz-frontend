import React, { useEffect, useState } from 'react';
import './App.css';
import { getCategory, getCurrentExercise, getTeam } from './basicElements/backend-calls';
import { Category, Exercise, Team } from './basicElements/backend-types';
import { Excercise } from './basicElements/Excercise';
import { Infos } from './basicElements/infos';
import { Layout } from './basicElements/layout';
import { Login } from './basicElements/login';
//import Latex as Latex from 'react-latex';
import { useAuthHeader, useCurrentUser } from './basicElements/user-hooks/user-hooks';

function Main() {
  const [info, setInfo] = useState(true);
  const [team, setTeam] = useState({ uuid: '', email: '', name: '' } as Team);
  const [exercise, setExercise] = useState({} as Exercise);
  
  const [category, setCategory] = useState({ uuid: '', ends_at: '', name: '', starts_at:'' } as Category);
  const authHeader = useAuthHeader();
  const task1 = `az első egyenletből kapott $6c = 5h$ feltételt behelyettesítve a baloldalra :
  $$30c-1100 = 8c$$
  $$22c = 1100$$
  $$c = 50$$
  Ekkor a $\\frac{6}{5} c = h$ egyenletből $h = \\frac{6}{5} \\cdot 50 = 60$, tehát
  Ákos $c+h = 50+60 = 110$ csirkefalatot és hagymakarikát rendelt összesen.`;

  const user = useCurrentUser();
  console.log('user', user)
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
  console.log(team);

  const task2 = `Azt állítjuk, hogy Gábor legfeljebb 14 számot írhatott fel. Pontosan 14 számot
  felírhatott például a következőképpen:
  \\[\\begin{array}{l|cccccccccccccc}
  \\text{szám}&199&279&287&295&339&347&355&363&371&406&414&422&430&501\\\\
  \\text{számjegyösszeg}&19&18&17&16&15&14&13&12&11&10&9&8&7&6
  \\end{array}\\]
  A továbbiakban belátjuk, hogy több szám nem írható fel a megadott módon.
  Tegyük fel, hogy $a_1, a_2, \\ldots, a_{15}$ háromjegyű számok, melyek
  számjegyösszegei rendre $d_1,d_2,\\ldots, d_{15}$, és teljesül, hogy
  \\[\\begin{aligned}
      a_1 < a_2 < \\ldots < a_{15}\\\\
      d_1 > d_2 > \\ldots > d_{15}
  \\end{aligned}\\]
  Ha mindegyik száme`;
const script = `
import { LaTeXJSComponent } from "https://cdn.jsdelivr.net/npm/latex.js/dist/latex.mjs"
customElements.define("latex-js", LaTeXJSComponent)`
  return (
    <Layout>
      {!user && <Login />}
      {user && info && <Infos setInfo={setInfo} teamName={team.name} categoryName={category.name} categoryEnd={category.ends_at} categoryStart={category.starts_at}/>}
      {user && !info && <Excercise auth={authHeader} exercise={exercise} />}
    </Layout>
  );
}

export default Main;
