import React from "react";
import { NavLink } from "react-router-dom";
import style from "../style/layout.module.scss";
import Footer from "./footer";

interface props {
  children: any;
}

const Layout = ({ children }: props) => {
  return (
    <div className={style.container}>
      <header className={style.hero}>
        <h2 className={style.h2}>Karol Maj</h2>
        <nav className={style.nav}>
          <NavLink className={({isActive}) => isActive ? `${style.active}` : '' } to="/">Home</NavLink>
          <NavLink className={({isActive}) => isActive ? `${style.active}` : '' } to="/github">Github</NavLink>
          <NavLink className={({isActive}) => isActive ? `${style.active}` : '' } to="/silnia">Silnia</NavLink>
        </nav>
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
