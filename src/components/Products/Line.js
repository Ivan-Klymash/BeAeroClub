import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    line: {
        textAlign: 'center',
        height: '121px',
        margin: '0 1% 40px',
    },
}))

const Line = () => {
    const classes = useStyles()

    return (
        <div className={classes.line}>
            <img src="https://themes.muffingroup.com/be/aeroclub/wp-content/uploads/2018/11/aeroclub-arrow-vertical.png" />
        </div>
    )
}

export default Line
