import React from "react";
import s from "./ProfileInfo.module.css";
import instagram from "../../../assets/img/contacts/instagram.png";
import twitter from "../../../assets/img/contacts/twitter.png";
import facebook from "../../../assets/img/contacts/facebook.png";
const Contacts = (props) => {
    return <div className={s.cotial}>
        <div> <img src={facebook}/>{props.profile.contacts.facebook}</div>
        <div>{props.profile.contacts.website}</div>
        <div><img src={twitter}/>{props.profile.contacts.twitter}</div>
        <div><img src={instagram}/>{props.profile.contacts.instagram}</div>
        <div >{props.profile.contacts.youtube}</div>
        <div >{props.profile.contacts.github}</div>
        <div >{props.profile.contacts.mainLink}</div>
    </div>

}


export default Contacts;