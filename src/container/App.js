/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/products.action'
import Slider from './Main/Slider/Carousel'
import { Route } from 'react-router-dom'

const App = () => {
    const [likeButtonsState, setLikeButtonState] = useState({})
    const changeLike = (id) => {
        setLikeButtonState((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

    const likesLength = Object.keys(likeButtonsState).filter(
        (item) => likeButtonsState[item] === true
    ).length

    const [cartState, setCartState] = useState({})
    const changeNumber = (id) => {
        setCartState((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

    const cartLength = Object.keys(cartState).filter(
        (item) => cartState[item] === true
    ).length

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const dispatch = useDispatch()

    return (
        <>
            <CssBaseline />
            <Header likesLength={likesLength} cartLength={cartLength} />
            <Route path="/" exact component={Slider} />
            <Main changeLike={changeLike} changeNumber={changeNumber} />
            <Footer />
        </>
    )
}

export default App
