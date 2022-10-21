import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { slide as Menu } from "react-burger-menu";
var styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "36px",
    height: "30px",
    right: "30px",
    top: "30px",
  },
  bmBurgerBars: {
    background: "#fff",
    height: "15%",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
    left: "8px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
    color: "white",
    fontSize: "25px",
    textDecoration: "none",
    margin: "1em 0",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

export default function MainNavigation(props) {
  const { favoritesList } = props;

  const [menuOpen, setMenuOpen] = useState(false);

  // funcionalidad para esconder la navbar
  // posición inicial es donde donde se encuentre la pantalla en la web
  let initialPos = window.pageYOffset;
  // función para detectar el scroll en pantalla
  window.onscroll = () => {
    // posicion donde se enceuntre la pantalla
    let finalPos = window.pageYOffset;
    // si varia la posición 1 respecto a la 2
    if (initialPos > finalPos) {
      // si cumple la condición la propiedad "top" se sitúa en 0
      document.getElementById("header").style.top = "0";
    } else {
      // si no cumple la condicion, la propuedad "top" se situara en -5rem (el height de la navbar)
      document.getElementById("header").style.top = "-5rem";
    }
    // resetea la posición dos para volver a activar la función
    initialPos = finalPos;
  };

  const handleClose = () => {
    setMenuOpen(false);
  };
  const handleStateChange = (state) => {
    return setMenuOpen(state.menuOpen);
  };

  return (
    <header
      id="header"
      className={classes.header}
      data-test="navigation-header"
    >
      <div className={classes.logo}>React Meetups</div>
      <nav className={classes.burger}>
        <Menu
          styles={styles}
          right
          disableAutoFocus
          isOpen={menuOpen}
          onStateChange={(state) => handleStateChange(state)}
        >
          <Link onClick={handleClose} className="menu-item" to="/">
            All Meetups
          </Link>
          <Link onClick={handleClose} className="menu-item" to="/new">
            Add New Meetup
          </Link>
          <Link onClick={handleClose} className="menu-item" to="/favorites">
            My Favorites
            <span className={classes.badge}>{favoritesList.length}</span>
          </Link>
        </Menu>
      </nav>
      <nav className={classes.desktop}>
        <ul>
          <li>
            <Link className="menu-item" to="/">
              All Meetups
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="/new">
              Add New Meetup
            </Link>
          </li>
          <li>
            <Link className="menu-item" to="/favorites">
              My Favorites
              <span className={classes.badge}>{favoritesList.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
