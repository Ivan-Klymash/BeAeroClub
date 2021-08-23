import Button from '@material-ui/core/Button'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Submenu from '../../Submenu/Submenu'
import PropTypes from 'prop-types'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

const useStyles = makeStyles(() => ({
    menu: {
        fontSize: 15,
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#048bda',
        },
    },

    rightColumnButton: {
        backgroundColor: '#0a2cb2',
        fontSize: 15,
        textTransform: 'none',
        margin: '0 5px',
        '&:hover': {
            backgroundColor: '#048bda',
        },
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    },
    menuDown: {
        marginTop: 5,
        '&:hover': {
            backgroundColor: '#048bda',
        },
    },
}))

const Menu = ({ likesNumber }) => {
    const classes = useStyles()
    return (
        <>
            <Button color="inherit" className={classes.menu}>
                <Link to="/" className={classes.link}>
                    Home
                </Link>
            </Button>
            <div className="menu">
                <Button color="inherit" className={classes.menu}>
                    Our offer
                    <ArrowDropDownIcon />
                </Button>
                <Submenu />
            </div>

            <Button color="inherit" className={classes.menu}>
                <Link to="/news" className={classes.link}>
                    News and events
                </Link>
            </Button>
            <Button color="inherit" className={classes.menu}>
                <Link to="/story" className={classes.link}>
                    Story
                </Link>
            </Button>
            <Button color="inherit" className={classes.menu}>
                <Link to="/contact" className={classes.link}>
                    Contact
                </Link>
            </Button>
            <Button color="inherit" className={classes.menuDown}>
                <Link to="/favorite" className={classes.link}>
                    <FavoriteIcon />({likesNumber})
                </Link>
            </Button>

            <Button color="inherit" className={classes.menuDown}>
                <Link to="/cart" className={classes.link}>
                    <ShoppingCartIcon />
                </Link>
            </Button>

            <Button color="inherit" className={classes.rightColumnButton}>
                Buy now
            </Button>
        </>
    )
}

Menu.propTypes = {
    likesNumber: PropTypes.number,
}

export default Menu