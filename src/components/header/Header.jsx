import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

import pokeBall from '../../assets/pokeBall.png';

const Header = () => {
  return (
    <div className="header-container ">
      <div className="logo-container">
        <Link to="/">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            alt=""
          />
        </Link>
      </div>

      <div className="myPokedex-container">
        <span className="">My PokeDex</span>
        <img src={pokeBall} alt="" className="pokeBall-img" />
      </div>
    </div>
  );
};

export default Header;
