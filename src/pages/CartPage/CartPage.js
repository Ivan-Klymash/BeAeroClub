import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import CartTotal from '../../components/Cart/CartTotal'
import CartProductList from '../../components/Cart/CartProductList'
import CartProductListItemExtended from '../../components/Cart/CartProductListItemExtended'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const CartPage = ({ productsInCart }) => {
    return (
        <>
            <h1>Cart Page</h1>
            <Grid container spacing={2}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
            <Link to="/checkout"> Proceed to checkout </Link>
        </>
    )
}

CartPage.propTypes = {
    productsInCart: PropTypes.object,
    removeProductFromCart: PropTypes.func,
    changeProductQuantity: PropTypes.func,
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCart,
})

export default connect(mapStateToProps)(CartPage)
