import React, {useReducer} from "react";
import alertReducer from './alertReducer'
import alertContext from "./alertContext";
import {
    SET_ALERT,
    REMOVE_ALERT
} from "../types";

const AlertState = props => {
    const initialState = null
    const [state, dispatch] = useReducer(alertReducer, initialState)

    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: {msg, type}
        })
    }

    const removeAlert = () => {
        dispatch({type: REMOVE_ALERT})
    }

    return <alertContext.Provider value={{
        alert: state,
        setAlert,
        removeAlert
    }}>
        {props.children}
    </alertContext.Provider>
}
export default AlertState
