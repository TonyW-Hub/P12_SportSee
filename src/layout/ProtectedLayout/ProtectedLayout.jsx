import React from "react";
import Styles from "./ProtectedLayout.module.scss";
import { Outlet } from "react-router-dom";
import { ProtectedNavBar } from "../../components/Navbars/ProtectedNavBar/ProtectedNavBar";
import { SideBar } from "../../components/Navbars/SideBar/SideBar";

export const ProtectedLayout = () => {
  return (
    <React.Fragment>
      <ProtectedNavBar />
      <div className={Styles.ProtectedLayout}>
        <SideBar />
        <main className={Styles.ProtectedLayoutContent}>
          <Outlet />
        </main>
      </div>
    </React.Fragment>
  );
};
