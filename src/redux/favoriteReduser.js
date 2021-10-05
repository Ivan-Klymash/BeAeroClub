const favoriteReduser = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                [action.id]: state[action.id] || 0,
            }
        default:
            return state
    }
}

export default favoriteReduser
