import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Header(){
    return(
        <ul id="navi">
            <div className="navi-header">
                <li><NavLink to={"/"}>ABOUT-ORDER</NavLink></li>
            </div>
            <li className="navi-bar">
                <NavLink to="/">오더생성</NavLink>
            </li>
            <li className="navi-bar">
                <NavLink to="#">TEST</NavLink>
                <ul className="navi-sub">
                    <li><NavLink to="/test">Test1</NavLink></li>
                    <li><NavLink to="#">2-2</NavLink></li>
                </ul>
            </li>
            <li className="navi-bar">
                <NavLink to={"#"}>메뉴3</NavLink>
                <ul className="navi-sub">
                    <li><NavLink to="#">3-1</NavLink></li>
                    <li><NavLink to="#">3-3</NavLink></li>
                    <li><NavLink to="#">3-2</NavLink></li>
                </ul>
            </li>
        </ul>
    )
}
