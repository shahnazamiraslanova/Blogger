import React from 'react'
import {NavLink } from "react-router-dom"
import './Header.css'
const Header = () => {
    return (
        <div id='header'>
            <NavLink to="/"> <img src="https://preview.colorlib.com/theme/blogger/img/logo.png.webp" alt="" /></NavLink>
            <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="add">ADD</NavLink></li>

                <li><NavLink to="news">NEWS</NavLink></li>
                <li><NavLink to="travel">TRAVEL</NavLink></li>
                <li><NavLink to="fashion">FASHION</NavLink></li>
                <li><NavLink to="team">TEAM</NavLink></li>
                <li>
                    <select name="" id="">

                        <option value="">PAGES</option>
                        <option value="">Single</option>
                    </select>
                </li>

            </ul>


        </div>
    )
}

export default Header