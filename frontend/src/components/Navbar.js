import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <>
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <h1>PizzApp</h1>
        <ul>
          <li>Pizzas</li>
          <li>My Order</li>
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Navbar