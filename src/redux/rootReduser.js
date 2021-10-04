import { combineReducers } from 'redux'
import cartReduser from './cartReduser'
import productsLikeReduser from './productsLikeReduser'
import productsReduser from './productsReduser'
// import favoriteReduser from './favoriteReduser'

const rootReduser = combineReducers({
    likeButtonsState: productsLikeReduser,
    productsInCart: cartReduser,
    products: productsReduser,
    // productsInFavorite: favoriteReduser,
})

export default rootReduser
