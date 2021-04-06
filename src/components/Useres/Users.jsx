import React from "react";
import s from "./users.module.css";

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [{
                id: "1",
                photoUrl: "https://www.fonstola.ru/pic/202006/800x600/fonstola.ru-393536.jpg",
                followed: false, name: "Sergei", status: "Hi", location: {country: "PMR", city: "Tiraspol",}
            },
                {
                    id: "2",
                    photoUrl: "https://www.fonstola.ru/pic/202006/800x600/fonstola.ru-393536.jpg",
                    followed: true, name: "Sergei", status: "yoyoyo", location: {country: "Russia", city: "Moscow",}
                },
                {
                    id: "3",
                    photoUrl: "https://www.fonstola.ru/pic/202006/800x600/fonstola.ru-393536.jpg",
                    followed: false,
                    name: "Sergei",
                    status: "I'm from Russia",
                    location: {country: "Ukraine", city: "Odessa",},
                }]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                    <div><img src={u.photoUrl} className={s.userPhoto}/></div>
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
                        <div> {u.location.city} </div>
                        <div> {u.location.country} </div>
                    </span>
                    </span>
                </div>
            )
        }
    </div>
}

export default Users
