import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import FriendData from "../Friends/FriendData/FriendData";


const Navbar = (props) => {
    let FriendElement = props.state.friend.map(f => (
            <div className={s.item} key={f.id}>
                <NavLink to="/friends" activeClassName={s.activeLink}>
                    <FriendData surname={f.surname} ages={f.ages}/>
                </NavLink>
            </div>
    ));

    return <div>
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Massages</NavLink>
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
            <h3>Friends</h3>
           <div className={s.frends}>
                {FriendElement}
           </div>
        </nav>
        <div>

        </div>
    </div>
}

export default Navbar;