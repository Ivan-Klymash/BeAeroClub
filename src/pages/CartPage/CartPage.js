import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid } from '@material-ui/core'
import CartTotal from '../../components/Cart/CartTotal'
import CartProductList from '../../components/Cart/CartProductList'
import CartProductListItemExtended from '../../components/Cart/CartProductListItemExtended'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const buttonStyle = {
    textDecoration: 'none',
    color: 'black',
}

const CartPage = ({ productsInCart }) => {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Cart Page</h1>
            <Grid container spacing={2}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    paddingTop: 40,
                    paddingBottom: 10,
                    backgroundColor: 'rgb(208 221 238)',
                }}
            >
                <Button variant="contained">
                    <Link to="/" style={buttonStyle}>
                        Continue shopping
                    </Link>
                </Button>
                <Button variant="contained">
                    <Link to="/checkout" style={buttonStyle}>
                        Secure checkout
                    </Link>
                </Button>
            </div>
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
