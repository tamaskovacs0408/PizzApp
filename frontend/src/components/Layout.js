import {Outlet} from "react-router-dom";

import classes from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <main className={classes["layout-main"]}>
        <h1>PizzApp</h1>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
