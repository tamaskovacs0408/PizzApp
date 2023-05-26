import {Outlet} from "react-router-dom";

import Navbar from "../components/Navbar";

import classes from "./Layout.module.scss";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className={classes["layout-main"]}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
