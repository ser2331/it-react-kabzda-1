import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {
    const backgroundUrl = "https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg";

    return <div>
        <div>
            <img className={s.fon} src={backgroundUrl} alt=""/>
        </div>
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    </div>
}
export default Profile;