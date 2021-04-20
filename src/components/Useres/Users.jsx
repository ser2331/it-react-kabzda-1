import React from "react";
import s from "./users.module.css";
import UserPhoto from "../../assets/img/unnamed.jpg"
import axios from "axios";

class Users extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        let pageCount = this.props.pageSize / this.props.totalUsersCount
        let pages = []
        for (let i = 1; 1 <= pageCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {
                    pages.map(p=> {
                        return <span className={ this.props.currentPage===p && s.selectedPage}>{p}</span>
                })}

            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                    <div><img src={u.photos.small != null ? u.photos.small : UserPhoto} className={s.userPhoto}/></div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
}

export default Users
