import React from "react";
import "./styles.css";
function NavBar({ routes = [{ name: "", route: "" }] }) {
  console.log(routes);
  return (
    <nav className="navbar-container">
      <ul>
        {routes.map((rote) => (
          <li>
            <a className="navbar-container__item" href={routes.route}>
              {rote.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
