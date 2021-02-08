import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return <div>
        <div>
            <img className={s.fon}
                 src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg"/>
        </div>
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    </div>

}
export default Profile;