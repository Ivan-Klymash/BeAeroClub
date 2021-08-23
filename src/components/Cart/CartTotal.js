import React from 'react'
import { keys } from 'lodash'
import PropTypes from 'prop-types'
import productsArray, { getProductsObj } from '../Products/productsArray'

const CartTotal = ({
    productsInCart,
    productsObj = getProductsObj(productsArray),
}) => {
    return (
        <div>
            Total price:
            {keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsInCart[productId] * productsObj[productId].price,
                0
            )}
            $
        </div>
    )
}

CartTotal.propTypes = {
    productsInCart: PropTypes.object.isRequired,
    productsObj: PropTypes.object,
}

export default CartTotal
