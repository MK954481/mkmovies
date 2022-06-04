import React from "react";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
import { Link } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";
import {
  Wrapper,
  Content,
  LogoImg,
  TMDBLogoImg,
  Wrapper1,
} from "./Header.styles";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        <Link to="/pathLink1">{/* <Wrapper1>Popular Movies</Wrapper1> */}</Link>
        {/* <Wrapper1 href="#2">More</Wrapper1> */}
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
