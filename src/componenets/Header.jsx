import React from "react";
import "../componentCss/header.css";
import  GiEarthAmerica  from 'react-icons/gi';

function Header() {
  let iconStyles = { height: "4.364vw" };
  return (
    <>
      <header>
        {/* <div className="icon">
        </div> */}
        <GiEarthAmerica className="icon" />
        <h1>my travel journal.</h1>
      </header>
    </>
  );
}

export default Header;
