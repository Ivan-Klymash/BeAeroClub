import React from 'react'
import { keys } from 'lodash'
import { getProductsObj } from '../Products/productsArray'
import PropTypes from 'prop-types'
import CartProductListItem from './CartProductListItem'
import { connect } from 'react-redux'

const CartProductList = ({
    productsArray,
    productsInCart,
    productsObj = getProductsObj(productsArray),
    CartItem = CartProductListItem,
}) => {
    if (productsArray.length === 0) {
        return null
    } else {
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
}

CartProductList.propTypes = {
    productsInCart: PropTypes.object,
    productsObj: PropTypes.object,
    CartItem: PropTypes.object,
    removeProductFromCart: PropTypes.func,
    changeProductQuantity: PropTypes.func,
    productsArray: PropTypes.array,
}

const mapStateToProps = (state) => ({
    productsArray: state.products,
})

export default connect(mapStateToProps)(CartProductList)
