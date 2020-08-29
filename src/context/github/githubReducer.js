import {
    CLEAR_USERS,
    GET_USER,
    SEACRH_USERS,
    SET_LOADING,
    NOT_LOADING
} from '../types'

export default (state, action) => {
    switch (action.type){
        case SEACRH_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case CLEAR_USERS:
            return {
                ...state,
                user: {},
                users: []
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case NOT_LOADING:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}