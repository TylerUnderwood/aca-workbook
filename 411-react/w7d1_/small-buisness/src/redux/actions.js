
export const login = ( username ) => {
    return {
        type: 'LOGIN',
        value: username
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
        value: 'Guest'
    }
}

export const addListing = ( listing ) => {
    return {
        type: 'ADD_BUSINESS',
        value: listing
    }
}

export const removeListing = ( index ) => {
    return {
        type: 'REMOVE_BUSINESS',
        value: index
    }
}