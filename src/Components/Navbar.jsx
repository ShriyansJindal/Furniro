import React from 'react'
import "./Navbar.css"
import { VscAccount} from "react-icons/vsc";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import {  Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <nav>
            <div className="logo">
                <img src="../logo.png" alt="" />
                <h1>Furniro</h1>
            </div>
            <div className="menu-opt">
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="icons">
            <VscAccount />
            <IoSearchOutline />
            <IoHeartOutline />
            <Link to="/cart" className='cart'>
            <IoCartOutline/>
            </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar