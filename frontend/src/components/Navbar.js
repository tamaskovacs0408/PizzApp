import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <>
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <ul>
          <li>Pizzas</li>
          <li>Contact</li>
          <li>My Order</li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Navbar