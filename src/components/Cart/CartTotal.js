import React from 'react'
import { keys } from 'lodash'
import PropTypes from 'prop-types'
import { getProductsObj } from '../Products/productsArray'
import { connect } from 'react-redux'

const CartTotal = ({
    productsArray,
    productsInCart,
    productsObj = getProductsObj(productsArray),
}) => {
    if (productsArray.length === 0) {
        return null
    } else {
        return (
            <div>
                Total price:
                {keys(productsInCart).reduce(
                    (total, productId) =>
                        total +
                        productsInCart[productId] *
                            productsObj[productId].price,
                    0
                )}
                $
            </div>
        )
    }
}

CartTotal.propTypes = {
    productsInCart: PropTypes.object.isRequired,
    productsObj: PropTypes.object,
}

const mapStateToProps = (state) => ({
    productsArray: state.products,
})

export default connect(mapStateToProps)(CartTotal)
