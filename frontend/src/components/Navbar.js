import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <>
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <h1><NavLink to="/">PizzApp</NavLink></h1>
        <ul>
          <li><NavLink to="/pizzas">Pizzas</NavLink></li>
          <li>My Order</li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Navbar