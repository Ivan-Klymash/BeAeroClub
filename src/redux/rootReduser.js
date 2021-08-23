import { combineReducers } from 'redux'
import cartReduser from './cartReduser'
import productsLikeReduser from './productsLikeReduser'

const rootReduser = combineReducers({
    likeButtonsState: productsLikeReduser,
    productsInCart: cartReduser,
})

export default rootReduser
