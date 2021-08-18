import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div class="p-3 flextext-white h-screen bg-dark w-64 mt-10 body-content ">
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <Link to="/home" class="nav-link " aria-current="page">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/addvisitor" class="nav-link " aria-current="page">
            Add Visitor
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/visitors" class="nav-link " aria-current="page">
            Visitors
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/products" class="nav-link " aria-current="page">
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
