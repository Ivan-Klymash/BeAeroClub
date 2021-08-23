const productsLikeReduser = (state = { 1: true, 2: true }, action) => {
    switch (action.type) {
        case 'LIKE':
            return {
                ...state,
                [action.id]: true,
            }
        case 'DIS_LIKE':
            return {
                ...state,
                [action.id]: false,
            }

        default:
            return state
    }
}

export default productsLikeReduser
