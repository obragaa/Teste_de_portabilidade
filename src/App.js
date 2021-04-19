import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  let [champions, setChampions] = useState([]);
  
  useEffect(() => {
    
    axios.get("http://191.233.249.8:3333/champions")
      .then(async (response) =>{

        const AllChampions = await response.data;
        setChampions(AllChampions);

      }
       )
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
     });
  });

  return (
  
      <div className="divPai">
        <ul className="nav d-flex bd-highlight mb-3 bg-dark">

            <li className="nav-item mr-auto p-2 bd-highlight text-white">
                <u><a className="nav-link text-white active" href="#">League Of Information</a></u>
            </li>

            <li className="nav-item p-2 bd-highlight">
                <a className="nav-link text-white" href="./index.html">HOME</a>
            </li>

            <li className="nav-item p-2 bd-highlight">
                <a className="nav-link text-white" href="#">HOME 2</a>
            </li>

        </ul>

        <div className="container-pai">
          {champions.map(champion => ( 
            
              <div className="conteudo">
                <div key={champion.id} id="header-heroi">
                  <p id="texto-header" >{champion.name}/{champion.function}</p>
                </div>

                <div key={champion.id} id="img-heroi ">
                  <img id="img-border" src={champion.img_champion}></img>
                </div>
                
                <div key={champion.id} className="infos-heroi">

                  <div className="divEncapsulamento">
                    <img className="skill-img" src={champion.img_passive}></img>
                    <p id="texto-infos">{champion.passive}</p>
                  </div>

                  <div className="divEncapsulamento">
                    <img className="skill-img" src={champion.Q_img}></img>
                    <p id="texto-infos"> Q: {champion.Q}</p>
                  </div>

                  <div className="divEncapsulamento">
                    <img className="skill-img" src={champion.W_img}></img>
                    <p id="texto-infos"> W: {champion.W}</p>
                  </div>

                  <div className="divEncapsulamento">
                    <img className="skill-img" src={champion.E_img}></img>
                    <p id="texto-infos"> E: {champion.E}</p>
                  </div>

                  <div className="divEncapsulamento">
                    <img className="skill-img" src={champion.R_img}></img>
                    <p id="texto-infos"> R: {champion.R}</p>
                  </div>

                </div>
              </div>
            
          ))}
        </div>

        <footer className="bg-dark text-center text-lg-start footer">


            <div className="text-center text-white p-3">
              © 2021 Copyright:
              <a className="text-white" href="https://www.sp.senai.br/">SENAI - São Paulo</a>
            </div>
            
        </footer>
      </div>
    
  );
}

export default App;
