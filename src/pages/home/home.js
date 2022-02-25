import React, { useEffect, useState } from 'react';
import {Route, Link} from 'react-router-dom';

import '../home/home.css';

import NOBOFrontLogo from './nobo-front-logo.svg';
import NOBOTopLogo from './nobo-top-logo.svg';

import NOBOTopSlika from './nobo-top-radijator.png';
import NOBOFrontSlika from './nobo-front-radijator.png';

function home() {
  return (
    <div className = "home">
      <div className = "home-sadrzaj">
        <div className  = "home-sadrzaj-logo" >
          <div className = "home-sadrzaj-logo-slika" onClick={() => window.open("https://www.bajsik.com.ba", "_self")}>
          </div>
        </div>
        <div className = "home-sadrzaj-izbornik">
          <div className = "home-sadrzaj-izbornik-opcija">
            <div className = "home-sadrzaj-izbornik-opcija-logo"><img src={NOBOTopLogo} /></div>
            <div className = "home-sadrzaj-izbornik-opcija-slika"><img src={NOBOTopSlika} /></div>
            <div className = "home-sadrzaj-izbornik-opcija-opis">
              <p>Nobo Top je radijator budućnosti, zahvaljujući najnovijoj tehnologiji i čistom, modernom, skandinavskom dizajnu.</p>
            </div>
            <a href="#" class="btn"><Link className = "menu" to="/nobotop">Izaberite radijator</Link></a>
          </div>
          <div className = "home-sadrzaj-izbornik-opcija">
            <div className = "home-sadrzaj-izbornik-opcija-logo"><img src={NOBOFrontLogo} /></div>
            <div className = "home-sadrzaj-izbornik-opcija-slika"><img src={NOBOFrontSlika} /></div>
            <div className = "home-sadrzaj-izbornik-opcija-opis">
              <p>Naš najprodavaniji radijator, prodat u više od 3 miliona primjeraka širom svijeta, sada je poboljšan najmodernijom inovativnom tehnologijom.</p>
            </div>
            <a href="#" class="btn"><Link className = "menu" to="/nobofront">Izaberite radijator</Link></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;