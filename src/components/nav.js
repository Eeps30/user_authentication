import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render(){
        const linkStyle = {
            color: 'white'
        }
        return (
            <nav className="navbar bg-info">
                <Link style={linkStyle} className="nav-link" to="/">Home</Link>
                <Link style={linkStyle} className="nav-link" to="/about-me">About Me</Link>
                <Link style={linkStyle} className="nav-link" to="/secret-docs">Secret Docs</Link>
                <Link style={linkStyle} className="nav-link" to="/operatives-list">Operatives List</Link>
                <button className="btn btn-outline-light">Log In</button>
            </nav>
        )
    }
}

export default Nav;