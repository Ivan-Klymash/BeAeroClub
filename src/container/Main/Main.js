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
import CheckoutPage from '../../pages/CheckoutPage/CheckoutPage'
import StorySection from './StorySection/StorySection'
import LearnToFlySection from './LearnToFlySection/LearnToFlySection'
import OfferSection from './OfferSection/OfferSection'

const Main = ({ changeLike, changeNumber }) => {
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
                                    changeLike={changeLike}
                                    changeNumber={changeNumber}
                                />
                            </>
                        )}
                    />
                    <Route path="/cart" exact component={CartPage} />
                    <Route path="/products/:id" exact component={ProductPage} />
                    <Route path="/checkout" component={CheckoutPage} />
                </Switch>
            </Container>
            <OfferPage changeLike={changeLike} changeNumber={changeNumber} />
            <Route path="/news" exact component={NewsPage} />
            <Route path="/story" exact component={StoryPage} />
            <Route path="/" exact component={StorySection} />
            <Route path="/" exact component={LearnToFlySection} />
            <Route path="/" exact component={OfferSection} />
            <Route path="/contact" exact component={ContactPage} />
        </>
    )
}

Main.propTypes = {
    productsInCart: PropTypes.object,
    removeProductFromCart: PropTypes.func,
    changeProductQuantity: PropTypes.func,
    changeLike: PropTypes.func,
    changeNumber: PropTypes.func,
}

export default Main
