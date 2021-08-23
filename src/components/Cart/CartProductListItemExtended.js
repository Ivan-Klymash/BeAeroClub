import React from 'react'
import { Button, Card, CardContent, Grid, makeStyles } from '@material-ui/core'
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash'
import Quantity from '../Quantity/Quantity'
import PropTypes from 'prop-types'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { connect } from 'react-redux'

const useStyles = makeStyles(() => ({
    media: {
        width: 150,
        height: '100%',
        paddingRight: 5,
    },
    cardWrap: {
        display: 'flex',
        padding: 12,
    },
    title: {
        marginTop: 0,
    },
}))

const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
    isLiked = false,
}) => {
    const classes = useStyles()
    return (
        <>
            <Grid item xs={12} sm={6} key={product.id}>
                <Card className={classes.cardWrap}>
                    <div>
                        <img src={product.image} className={classes.media} />
                    </div>
                    <CardContent>
                        <Button variant="outlined">
                            {isLiked ? (
                                <FavoriteIcon />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                        </Button>
                        <h4 className={classes.title}>{product.name}</h4>
                        <p>
                            Price for one certificate:
                            {product.price} $
                        </p>
                        <p>Time: {product.time} minutes</p>
                        <p>Quantity: {productCount}</p>
                        <Quantity
                            minCount={0}
                            onIncrementClick={() =>
                                changeProductQuantity(
                                    product.id,
                                    productCount + 1
                                )
                            }
                            onDecrementClick={() =>
                                productCount === 1
                                    ? removeProductFromCart(product.id)
                                    : changeProductQuantity(
                                          product.id,
                                          productCount - 1
                                      )
                            }
                            count={productCount}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            style={{
                                marginTop: 20,
                            }}
                            onClick={() => removeProductFromCart(product.id)}
                        >
                            <RestoreFromTrashIcon />
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

CartProductListItemExtended.propTypes = {
    removeProductFromCart: PropTypes.func,
    changeProductQuantity: PropTypes.func,
    product: PropTypes.object,
    productCount: PropTypes.number,
    isLiked: PropTypes.bool,
}

const MapStateToProps = (state, { product }) => ({
    isLiked: state.likeButtonsState[product.id],
})

export default connect(MapStateToProps)(CartProductListItemExtended)
