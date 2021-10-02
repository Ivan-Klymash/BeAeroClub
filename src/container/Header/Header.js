import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import clsx from 'clsx'
import Container from '@material-ui/core/Container'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Drawer, makeStyles, useTheme } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import Submenu from '../Submenu/Submenu'

const drawerWidth = 180

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: 5,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        textAlign: 'center',
    },
    root: {
        display: 'flex',
    },

    rightColumnButton: {
        backgroundColor: '#0a2cb2',
        fontSize: 15,
        textTransform: 'none',
        margin: '0 5px',
        marginBottom: 20,
        '&:hover': {
            backgroundColor: '#048bda',
        },
    },
    menu: {
        fontSize: 15,
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#048bda',
        },
    },

    toolBar: {
        height: 90,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },

    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    newMenuButton: {
        marginRight: theme.spacing(2),
    },
    '@media (min-width: 426px)': {
        newMenuButton: {
            display: 'none',
        },
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: 'grey',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}))

const Header = ({ productsInFavorite }) => {
    const classes = useStyles()
    const theme = useTheme()

    const [open, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }
    return (
        <>
            <AppBar
                position="sticky"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Container>
                    <Toolbar className={classes.toolBar}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(
                                classes.newMenuButton,
                                open && classes.hide
                            )}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Logo id="top" />
                        <Menu productsInFavorite={productsInFavorite} />
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                docked="false"
                className={classes.drawer}
                variant="temporary"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem>
                        <ListItemText onClick={handleDrawerClose}>
                            <Button
                                color="inherit"
                                className={classes.rightColumnButton}
                            >
                                <a
                                    className={classes.link}
                                    href="https://1.envato.market/c/1289117/275988/4415?u=https%3A%2F%2Fthemeforest.net%2Fitem%2Fbetheme-responsive-multipurpose-wordpress-theme%2F7758048%3Fref%3Dmuffingroup"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Buy now
                                </a>
                            </Button>
                            <Divider />
                            <Button color="inherit" className={classes.menu}>
                                <Link to="/" className={classes.link}>
                                    Home
                                </Link>
                            </Button>
                            <Divider />
                            <div className="menu">
                                <Button
                                    color="inherit"
                                    className={classes.menu}
                                    style={{ color: 'white' }}
                                >
                                    Our offer
                                    <ArrowDropDownIcon />
                                </Button>
                                <Submenu />
                            </div>
                            <Divider />
                            <Button color="inherit" className={classes.menu}>
                                <Link to="/news" className={classes.link}>
                                    News and events
                                </Link>
                            </Button>
                            <Divider />
                            <Button color="inherit" className={classes.menu}>
                                <Link to="/story" className={classes.link}>
                                    Story
                                </Link>
                            </Button>
                            <Divider />
                            <Button color="inherit" className={classes.menu}>
                                <Link to="/contact" className={classes.link}>
                                    Contact
                                </Link>
                            </Button>
                            <Divider />
                            <Button color="inherit" className={classes.menu}>
                                <Link to="/favorite" className={classes.link}>
                                    <FavoriteIcon />
                                </Link>
                            </Button>
                            <Divider />
                            <Button color="inherit" className={classes.menu}>
                                <Link to="/cart" className={classes.link}>
                                    <ShoppingCartIcon />
                                </Link>
                            </Button>
                            <Divider />
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

Header.propTypes = {
    productsInCart: PropTypes.object,
    productsInFavorite: PropTypes.object,
}
export default Header
