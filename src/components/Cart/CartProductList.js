import React from 'react'
import { keys } from 'lodash'
import productsArray, { getProductsObj } from '../Products/productsArray'
import PropTypes from 'prop-types'
import CartProductListItem from './CartProductListItem'

const CartProductList = ({
    productsInCart,
    productsObj = getProductsObj(productsArray),
    CartItem = CartProductListItem,
}) => {
    return (
        <>
            {keys(productsInCart).map((id) => (
                <CartItem
                    key={id}
                    product={productsObj[id]}
                    productCount={productsInCart[id]}
                />
            ))}
        </>
    )
}

CartProductList.propTypes = {
    productsInCart: PropTypes.object,
    productsObj: PropTypes.object,
    CartItem: PropTypes.object,
    removeProductFromCart: PropTypes.func,
    changeProductQuantity: PropTypes.func,
}

export default CartProductList
