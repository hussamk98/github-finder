import React from "react";
const Navbar = ({icon, title}) => {

    return (
        <div className="Nav">
            <h2><i className={icon}/> {title}</h2>
        </div>
    )
}
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fa fa-github'
}
export default Navbar