import { combineReducers } from 'redux'
import cartReduser from './cartReduser'
import productsLikeReduser from './productsLikeReduser'
import productsReduser from './productsReduser'

const rootReduser = combineReducers({
    likeButtonsState: productsLikeReduser,
    productsInCart: cartReduser,
    products: productsReduser,
})

export default rootReduser
