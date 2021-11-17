import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div>
                <ul className="nav bg-dark">

                    <li className="nav-item">
                        <Link className="nav-link text-decoration-none text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-decoration-none text-white" to="/login">Login</Link>
                    </li>

                </ul>
            </div>
        );
    }
}

export default Nav;