import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav
        class="site-navbar navbar navbar-default navbar-fixed-top navbar-mega navbar-expand-md"
        role="navigation"
      >
        <div class="nav-head text-center">
          <span class=" login-title ">LIB MS</span>
        </div>
        <div class="nav-2-head">
          <div class="input-group rounded search">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
          </div>
        </div>
        <div class="navbar-right">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-list-4"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-list-4">
            <a
              class="nav-link dropdown-toggle admin"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="https://www.pngitem.com/pimgs/m/226-2260470_transparent-admin-icon-png-admin-logo-png-png.png"
                width="40"
                height="35"
                class="rounded-circle"
              />
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <button class="dropdown-item" type="button">
                  Action
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Another action
                </button>
              </li>
              <li>
                <button class="dropdown-item" type="button">
                  Something else here
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
