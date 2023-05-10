import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeSwitch } from "../ThemeSwitch";
import { MoreButton } from "../moreButton";

export function NavBar(props) {
  const [active, setActive] = useState("navbar");

  const handleNav = () => {
    active === "navbar" ? setActive("navbarDrop") : setActive("navbar");
  };

  return (
    <div className={active}>
      <div className="menuDrop">
        <MoreButton handleNav={handleNav} />

        <h3>Menu</h3>
      </div>

      <a href="#inicio">
        <img src={props.img} />
      </a>
      <ul>
        <li>
          <a href="#inicio">Inicio</a>
        </li>
        <li>
          <a href="#fucionalidade">Funcionalidade</a>
        </li>
        <a href="#equipe">
          <li>Equipe</li>
        </a>
      </ul>
      <ThemeSwitch tema={props.tema} thmeToggler={props.thmeToggler} />
    </div>
  );
}
