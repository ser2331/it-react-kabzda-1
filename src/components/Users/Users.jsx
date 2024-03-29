import React from "react";
import s from "./users.module.css";
import UserPhoto from "../../assets/img/unnamed.jpg"
import {NavLink} from "react-router-dom";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; pagesCount >= i; i++) {
        pages.push(i)
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanget(p)
                             }}> {p} </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : UserPhoto}
                             className={s.userPhoto}/>
                        </NavLink> 
                        </div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>
                        }
                    </div>
                </span>
                    <span>
                    <span>
                        <div> {u.name} </div>
                        <div> {u.status} </div>
                    </span>
                    <span>
                        <div> {"u.location.city"} </div>
                        <div> {"u.location.country"} </div>
                    </span>
                </span>
                </div>
            )
        }
    </div>
}

export default Users