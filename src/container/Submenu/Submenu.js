import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
    subMenuLink: {
        color: 'black',
        textDecoration: 'none',
        listStyle: 'none',
        display: 'block',
        padding: '5px',
        textAlign: 'center',
        '&:hover': {
            color: '#048bda',
        },
    },
    list: {
        listStyle: 'none',
        padding: 0,
    },
}))

const Submenu = () => {
    const classes = useStyles()

    return (
        <>
            <div className="submenu">
                <ul className={classes.list}>
                    <li>
                        <Link to="/flights" className={classes.subMenuLink}>
                            Flights
                        </Link>
                    </li>
                    <li>
                        <Link to="/adrenalin" className={classes.subMenuLink}>
                            Adrenalin
                        </Link>
                    </li>
                    <li>
                        <Link to="/recreation" className={classes.subMenuLink}>
                            Recreation
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Submenu
