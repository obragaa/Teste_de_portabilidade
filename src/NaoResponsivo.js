import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './NaoResponsivo.css';

function NaoResponsivo() {

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
  
      <div className="divPai2">
        <ul className="nav d-flex bd-highlight mb-3 bg-dark">

            <li className="nav-item mr-auto p-2 bd-highlight text-white">
                <u><a className="nav-link text-white active" href="#">League Of Information</a></u>
            </li>

            <Link to='/'>
              <li className="nav-item p-2 bd-highlight">
                  <a className="nav-link text-white">HOME 1</a>
              </li>
            </Link>

            <Link to='/naoresponsivo'>
              <li className="nav-item p-2 bd-highlight">
                  <a className="nav-link text-white">HOME 2</a>
              </li>
            </Link>

        </ul>

        <div className="container-pai2">
          {champions.map(champion => ( 
            
              <div className="conteudo2">
                <div key={champion.id} id="header-heroi2">
                  <p id="texto-header2" >{champion.name}/{champion.function}</p>
                </div>

                <div key={champion.id} id="img-heroi2">
                  <img id="img-border2" src={champion.img_champion} width ="220px" heigth= "220px"></img>
                </div>
                
                <div key={champion.id} className="infos-heroi2">

                  <div className="divEncapsulamento2">
                    <img className="skill-img2" src={champion.img_passive}></img>
                    <p id="texto-infos2">{champion.passive}</p>
                  </div>

                  <div className="divEncapsulamento2">
                    <img className="skill-img2" src={champion.Q_img}></img>
                    <p id="texto-infos2"> Q: {champion.Q}</p>
                  </div>

                  <div className="divEncapsulamento2">
                    <img className="skill-img2" src={champion.W_img}></img>
                    <p id="texto-infos2"> W: {champion.W}</p>
                  </div>

                  <div className="divEncapsulamento2">
                    <img className="skill-img2" src={champion.E_img}></img>
                    <p id="texto-infos2"> E: {champion.E}</p>
                  </div>

                  <div className="divEncapsulamento2">
                    <img className="skill-img2" src={champion.R_img}></img>
                    <p id="texto-infos2"> R: {champion.R}</p>
                  </div>

                </div>
              </div>
            
          ))}
        </div>

        <footer className="bg-dark text-center text-lg-start footer2">


            <div className="text-center text-white p-3">
              © 2021 Copyright:
              <a className="text-white" href="https://www.sp.senai.br/">SENAI - São Paulo</a>
            </div>
            
        </footer>
      </div>
    
  );
}

export default NaoResponsivo;
