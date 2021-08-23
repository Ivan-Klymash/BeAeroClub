import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Cart from './Cart/Cart'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
    menuButton: {
        marginRight: 5,
    },
    toolBar: {
        height: 90,
    },
}))

const Header = ({ productsInCart, likesNumber }) => {
    const classes = useStyles()

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolBar}>
                {/* <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton> */}
                <Logo />
                <Menu likesNumber={likesNumber} />
                <Cart productsInCart={productsInCart} />
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    productsInCart: PropTypes.object,
    likesNumber: PropTypes.number,
}
export default Header
