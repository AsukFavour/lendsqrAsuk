import React, { ReactNode } from "react";
import TopNavbar from "../TopNavbar/TopNavbar";
import SideNavbar from "../SideNavbar/SideNavbar";
import "./Layout.scss";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <TopNavbar />
      <div>
        <SideNavbar />
        <main id="main-content-container">{children}</main>

      </div>
    </>
  );
};

export default Layout;
