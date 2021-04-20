import React from "react";
import {connect} from "react-redux";
import Music from "./Music";
import {AddTextAR, NewTextAR} from "../../redux/music-reducer";

const mapStateToProps = (state) => {
    return {
        moreText: state.musicPage.moreText,
        newText: state.musicPage.newText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addText: () => dispatch(AddTextAR()),

        newOnText: (onText) => {
            let action = NewTextAR(onText)
            dispatch(action)
        }
    }
}


const MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music)
export default MusicContainer