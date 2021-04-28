import React from "react";
import { connect } from "react-redux";
import axios from "axios"
import Profile from "./Profile";
import { setUserProfile,look, unlook } from "../../redux/profile-reducer";


class ProfileConteiner extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                unlook={this.props.unlook}
                look={this.props.look} />
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
export default connect(mapStateToProps, { setUserProfile,look,unlook })(ProfileConteiner)