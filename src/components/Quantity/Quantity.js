import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

const Quantity = ({
    count,
    onDecrementClick,
    onIncrementClick,
    minCount = 1,
}) => {
    return (
        <div className="service-quantity">
            <p>Quantity: </p>
            <Button
                variant="outlined"
                color="primary"
                onClick={() => onDecrementClick()}
                disabled={count <= minCount}
            >
                -
            </Button>
            <TextField variant="outlined" size="small" value={count} />
            <Button
                variant="outlined"
                color="primary"
                onClick={() => onIncrementClick()}
                disabled={count >= 10}
            >
                +
            </Button>
        </div>
    )
}

Quantity.propTypes = {
    count: PropTypes.number,
    setCount: PropTypes.func,
    onDecrementClick: PropTypes.func,
    onIncrementClick: PropTypes.func,
    minCount: PropTypes.number,
}

export default Quantity
