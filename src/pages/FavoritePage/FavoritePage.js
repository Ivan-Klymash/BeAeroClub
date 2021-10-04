import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { keys } from 'lodash'
import productsArray, {
    getProductsObj,
} from '../../components/Products/productsArray'
import Grid from '@material-ui/core/Grid'
import ProductListItem from '../../components/Products/ProductListItem'

const FavoritePage = ({
    productsInFavorite,
    productsObj = getProductsObj(productsArray),
    changeLike,
    // isLiked = false,
    // addLike,
    // removeLike,
}) => {
    return (
        <>
            <h1>Favorite Page</h1>

            <div>
                {keys(productsInFavorite).map((id) => (
                    <div key={id}>
                        {productsObj[id].name} : {productsInFavorite[id]}
                    </div>
                ))}
            </div>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
            >
                {productsArray.map(
                    ({
                        id,
                        name,
                        description,
                        quantity,
                        time,
                        age,
                        price,
                        image,
                        category,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                id={id}
                                name={name}
                                description={description}
                                quantity={quantity}
                                time={time}
                                age={age}
                                price={price}
                                image={image}
                                category={category}
                                changeLike={changeLike}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

FavoritePage.propTypes = {
    productsInFavorite: PropTypes.func,
    productsObj: PropTypes.object,
    changeLike: PropTypes.func,
    productsArray: PropTypes.array,
}

const mapStateToProps = (state, { id }) => ({
    isLiked: state.likeButtonsState[id],
})

const mapDispatchToProps = (dispatch) => ({
    addLike: (id) =>
        dispatch({
            type: 'LIKE',
            id,
        }),
    removeLike: (id) =>
        dispatch({
            type: 'DIS_LIKE',
            id,
        }),
})

export default connect(mapStateToProps, mapDispatchToProps)(FavoritePage)
