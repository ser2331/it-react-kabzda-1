import React from "react"
import s from "./preloaderstile.module.css"
import preloader from "../../../assets/img/bars.svg"
const Preloader=()=>{
return <div className={s.preloaderstile}>
                <img src={preloader} /> 
            </div>
}
export default Preloader


