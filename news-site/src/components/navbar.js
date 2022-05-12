import React from 'react'
import image from './images/logo.png'

const Navbar = () => {
    return (
        <nav>
        <a><img className="nav-image" src={image} alt=""/></a>
        <ul className="nav-items" >
            <a><li>Tech</li></a>
            <a><li>Science</li></a>
            <a><li>Food</li></a>
            <a><li>Arts</li></a>
            <a><li>Sports</li></a>
        </ul>

    </nav>
    )
}
export default Navbar;
