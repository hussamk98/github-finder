import React from "react";
import {Link} from "react-router-dom";

const Navbar = ({icon, title}) => {

    return (
        <div className="navbar">
            <Link to='/'> <h2 className='nav-title'><i className={icon}/> {title}</h2></Link>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fa fa-github fa-2x'
}
export default Navbar