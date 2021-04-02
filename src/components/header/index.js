import React from "react";
import SearchField from '../searchField'
import Logo from "../../assets/logo.png";
import history from '../../history'
import './styles.scss'

const Header = () => {
  return (
    <header>
      <nav className="col-md-10">
        <img
          className="logo"
          onClick={() => history.push("/")}
          src={Logo}
          title="gitHub"
          alt="gitHub"
        />
        <SearchField />
      </nav>
    </header>
  );
};

export default Header;
