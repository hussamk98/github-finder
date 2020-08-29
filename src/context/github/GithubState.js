import React, {useContext, useReducer} from "react";
import axios from 'axios'
import GithubContext from './githubContext'
import AlertContext from '../alert/alertContext'
import GithubReducer from './githubReducer'
import {
    CLEAR_USERS,
    GET_USER,
    SEACRH_USERS,
    SET_LOADING,
    NOT_LOADING
} from '../types'

let githubClientId
let githubClientSecret
githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET


const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)
    const alertContext = useContext(AlertContext)

    //search users
    const searchFunction = async search_text => {
        alertContext.removeAlert()
        setLoading()
        let users
        try {
            users = await axios.get(`https://api.github.com/search/users?q=${search_text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
            dispatch({
                type: SEACRH_USERS,
                payload: users.data.items
            })
            if (users.data.items.length === 0) alertContext.setAlert('No results found!', 'danger')
        } catch (err) {
            dispatch({type: NOT_LOADING})
            alertContext.setAlert('Something went wrong!', 'danger')
        }
    }

    //get User
    const getUser = async username => {
        setLoading()
        let user
        try {
            user = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`)
            dispatch({
                type: GET_USER,
                payload: user.data
            })
        } catch (err) {
            dispatch({type: NOT_LOADING})
        }
    }

    //clear users
    const clearUsers = () => dispatch({type: CLEAR_USERS})

    //set loading to true
    const setLoading = () => dispatch({type: SET_LOADING})


    return <GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchFunction,
        getUser,
        clearUsers
    }
    }>{props.children}</GithubContext.Provider>

}
export default GithubState
