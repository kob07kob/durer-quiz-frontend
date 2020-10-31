import React, { useState } from 'react';
import './App.css';
import { Excercise } from './basicElements/Excercise';
import { Layout } from './basicElements/layout';
import { Login } from './basicElements/login';
//import Latex as Latex from 'react-latex';
import { useCurrentUser } from './basicElements/user-hooks/user-hooks';

function Main() {
  const task1 = `az első egyenletből kapott $6c = 5h$ feltételt behelyettesítve a baloldalra :
  $$30c-1100 = 8c$$
  $$22c = 1100$$
  $$c = 50$$
  Ekkor a $\\frac{6}{5} c = h$ egyenletből $h = \\frac{6}{5} \\cdot 50 = 60$, tehát
  Ákos $c+h = 50+60 = 110$ csirkefalatot és hagymakarikát rendelt összesen.`;

  const user = useCurrentUser();
  
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

    return (
    <Layout>
    <head>
      <link
          href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
          rel="stylesheet"
      />
    </head>
        {!user?<Login/>:
      <Excercise numOfExcercise={1} numOfTries = {1} pointsAvarded={3} text={task1}/>
        }
    </Layout>
  );
}

export default Main;
