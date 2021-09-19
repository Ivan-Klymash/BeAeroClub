import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './Header/Header'
import Main from './Main/Main'
import { omit } from 'lodash'
import Footer from './Footer/Footer'
// import Slider from './Main/Slider/Slider'

const App = () => {
    const [productsInCart, setProductsInCart] = useState({
        1: 3,
        2: 2,
    })

    const addProductToCart = (id, count) => {
        setProductsInCart({
            ...productsInCart,
            [id]: (productsInCart[id] || 0) + count,
        })
    }

    const removeProductFromCart = (id) => {
        setProductsInCart(omit(productsInCart, id))
    }

    const changeProductQuantity = (id, count) => {
        setProductsInCart({
            ...productsInCart,
            [id]: count,
        })
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            {/* <Slider /> */}
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
                changeProductQuantity={changeProductQuantity}
            />
            <Footer />
        </>
    )
}

export default App
