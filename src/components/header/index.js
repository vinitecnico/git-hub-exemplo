import React from "react";
import SearchField from "../searchField";
import Content from "../content";
import Logo from "../../assets/logo.png";
import history from "../../history";
import "./styles.scss";

const Header = () => {
  return (
    <header>
      <Content>
        <nav>
          <section className="header-body">
            <img
              className="logo"
              onClick={() => history.push("/")}
              src={Logo}
              title="gitHub"
              alt="gitHub"
            />
            <SearchField />
          </section>
        </nav>
      </Content>
    </header>
  );
};

export default Header;
