import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import FriendContainer from "../Friends/Friend/FriendContainer";

const Navbar = () => {
    return <div>
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Massages</NavLink>
            </div>
            <div className={s.item + " " + s.friendsClass}>
                <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/video" activeClassName={s.activeLink}>Video</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item + " " + s.friendsClass}>
                <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/friends" activeClassName={s.activeLink}>
                    <FriendContainer/>
                </NavLink>
            </div>
        </nav>
    </div>
}

export default Navbar;