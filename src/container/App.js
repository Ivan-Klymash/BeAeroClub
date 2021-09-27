import React, { useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/products.action'
// import Slider from './Main/Slider/Slider'
import Slider from './Main/Slider/Carousel'

const App = () => {
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const dispatch = useDispatch()

    return (
        <>
            <CssBaseline />
            <Header />
            <Slider />
            {/* <Slider /> */}
            <Main />
            <Footer />
        </>
    )
}

export default App
