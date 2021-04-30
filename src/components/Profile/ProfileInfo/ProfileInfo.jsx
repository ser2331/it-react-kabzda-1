import React from "react"; import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader"
import asset from "../../../assets/img/unnamed.jpg"
import Contacts from "./contacts"
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return <div>
        <div> {props.profile.fullName} </div>
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}
                    className={s.userPhoto} />
            </div>
            </div>
            <Contacts profile={props.profile }/>
            <div>
                {
                    props.followed
                        ? <button onClick={() => props.unlook(props.id)}>Not looking</button>
                        : <button onClick={() => props.look(props.id)}>looking</button>
                }
            </div>
            <div>{props.profile.lookingForAJobDescription}</div>
            <div> {props.profile.aboutMe} </div>
        </div>
}
export default ProfileInfo;