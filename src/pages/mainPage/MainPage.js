import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTitleAction } from "../../redux/actions";


function MainPage() {

    const dispatch = useDispatch()
    const {title} = useSelector(state => state.titleReducer)


    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => dispatch(changeTitleAction())}>change title</button>
        </div>
    )
}

export default MainPage