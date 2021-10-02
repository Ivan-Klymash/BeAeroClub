import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'

const FavoritePage = ({ productsInFavorite }) => {
    return (
        <>
            <h1>Favorite Page</h1>
            <Grid
                container
                spacing={2}
                productsInFavorite={productsInFavorite}
            ></Grid>
        </>
    )
}

FavoritePage.propTypes = {
    productsInFavorite: PropTypes.object,
}

const mapStateToProps = (state) => ({
    productsInFavorite: state.productsInFavorite,
})

export default connect(mapStateToProps)(FavoritePage)
