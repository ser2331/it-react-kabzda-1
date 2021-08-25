import React from "react";
import { connect } from "react-redux";
import axios from "axios"
import Profile from "./Profile";
import { setUserProfile, look, unlook } from "../../redux/profile-reducer";
import { withRouter } from "react-router";


class ProfileConteiner extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }
    render() {
        return (
            <Profile {...this.props}
                profile={this.props.profile}
                unlook={this.props.unlook}
                look={this.props.look}

            />
        )
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    // users:state.profilePage.users
})
let WithUrlDataConteinerComponent = withRouter(ProfileConteiner)
export default connect(mapStateToProps, { setUserProfile, look, unlook })(WithUrlDataConteinerComponent)