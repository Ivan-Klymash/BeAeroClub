import React from 'react'
import PropTypes from 'prop-types'
import CartTotal from '../../../components/Cart/CartTotal'
import CartProductList from '../../../components/Cart/CartProductList'
import { connect } from 'react-redux'

const Cart = ({ productsInCart }) => {
    return (
        <>
            <div>
                <CartProductList productsInCart={productsInCart} />
                <CartTotal productsInCart={productsInCart} />
            </div>
        </>
    )
}

Cart.propTypes = {
    productsInCart: PropTypes.object,
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCart,
})

export default connect(mapStateToProps)(Cart)
