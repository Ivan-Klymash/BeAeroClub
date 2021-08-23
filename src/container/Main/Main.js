import Container from '@material-ui/core/Container'
import React from 'react'
import ProductsList from '../../components/Products/ProductList'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import CartPage from '../../pages/CartPage/CartPage'
import OfferPage from '../../pages/OfferPage/OfferPage'
import NewsPage from '../../pages/NewsPage/NewsPage'
import StoryPage from '../../pages/StoryPage/StoryPage'
import ContactPage from '../../pages/ContactPage/ContactPage'
import ProductPage from '../../pages/ProductPage/ProductPage'

const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    return (
        <>
            <Container>
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <>
                                <ProductsList
                                    addProductToCart={addProductToCart}
                                />
                            </>
                        )}
                    />
                    <OfferPage />
                    <Route path="/news" component={NewsPage} />
                    <Route path="/story" component={StoryPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route
                        path="/cart"
                        render={() => (
                            <CartPage
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                                changeProductQuantity={changeProductQuantity}
                            />
                        )}
                    />
                    <Route path="/products/:id" component={ProductPage} />
                </Switch>
            </Container>
        </>
    )
}

Main.propTypes = {
    addProductToCart: PropTypes.func,
    productsInCart: PropTypes.object,
    removeProductFromCart: PropTypes.func,
    changeProductQuantity: PropTypes.func,
    likeButtonsState: PropTypes.object,
}

export default Main
