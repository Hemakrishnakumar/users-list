import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <h1 style={{ backgroundColor: "yellow", padding: "10px" }}>mySkool</h1>
      </NavLink>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
