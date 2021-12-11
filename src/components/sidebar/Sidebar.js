import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";

export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebat-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span> Rodrigo</span>
        </h3>

        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </aside>
  );
};
