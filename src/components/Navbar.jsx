import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/owner">Owner</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Navbar;