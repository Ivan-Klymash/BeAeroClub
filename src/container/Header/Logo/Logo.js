import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    rightColumn: {
        flexGrow: 1,
        padding: '15px 0',
        margin: '0 30px 0 5px',
    },
    logo: {
        height: '60px',
        maxHeight: '41px',
    },
}))

const Logo = () => {
    const classes = useStyles()
    return (
        <>
            <a href="" className={classes.rightColumn}>
                <img
                    className={classes.logo}
                    src="./images/aeroclub_retina.png"
                />
            </a>
        </>
    )
}

export default Logo
