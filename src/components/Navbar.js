import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import React, { useState } from "react";
import { BsCart2 } from 'react-icons/bs';
import Logo from "../Assets/Logo.svg";

function Navbar() {
    const [openMenu,setOpenMenu]=useState()
    const [openSubMenu,setOpenSubMenu]=useState()
    const menuOption=[
        {
            text:"Home",
            icon:<HomeIcon/>
        },
        {
            text:"About",
            icon:<InfoIcon/>
        },
        {
            text:"Portfolio",
            icon:<CommentRoundedIcon/>
        },
        {
            text:"Contact",
            icon:<PhoneRoundedIcon/>
        },
        {
            text:"Cart",
            icon:<ShoppingCartRoundedIcon/>
        }
    ]
  return (
    <div>
        <nav>
            <div className="nav-logo">
                <img src={Logo}/>
            </div>
            <div className="navbar-links">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Portfolio</a>
                <a href="">Contact</a>
                <a href=""><BsCart2 className="cart-icon"/></a>
                <button className="primary-btn"></button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar