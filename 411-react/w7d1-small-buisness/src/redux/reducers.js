import { combineReducers } from 'redux'
import initialState from '../redux/state';

const user = ( state = initialState, action ) => {

	const updatedUser = { }
	// console.log(updatedUser, 'pre update')
	// console.log(state, 'reducers')

    switch(action.type) {
        case 'LOGIN':
			updatedUser.username = action.value
			updatedUser.loggedIn = true
			// console.log(updatedUser, 'post update')
            return {
				...state,
				username: updatedUser.username,
				loggedIn: updatedUser.loggedIn
			}
        case 'LOGOUT':
			updatedUser.username = action.value
			updatedUser.loggedIn = false
			return {
				...state,
				username: updatedUser.username,
				loggedIn: updatedUser.loggedIn
			}
        default:
            return state
    }
}

const business = ( state = [], action ) => {
    switch(action.type) {
        case 'ADD_BUSINESS':
            return [ ...state, action.value ]
        case 'REMOVE_BUSINESS':
            const business = [ ...state ]
            business.splice(action.value, 1)
            return business
        default:
            return state
    }
}

export default combineReducers({ user, business })