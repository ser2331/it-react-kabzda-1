import { connect } from "react-redux";
import Users from "./Users.jsx"
import React from "react";
import axios from "axios";
import Preloader from "../common/preloader/Preloader.jsx"
import {follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching
} from "../../redux/users-reduser";



class UsersContainer extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)

            })
    }
    onPageChanget = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page= ${pageNumber}&count= ${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }
    render() {

        return <>
            {this.props.isFetching ?
                <Preloader />
                : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanget={this.onPageChanget}
                users={this.props.users}

            />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }
export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage,
    setTotalUsersCount, toggleIsFetching})
    (UsersContainer)