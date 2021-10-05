import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import './ProductListItem.css'
import Quantity from '../Quantity/Quantity'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

const ProductListItem = ({
    id,
    name,
    description,
    quantity,
    time,
    age,
    price,
    image,
    category,
    addProductToCart,
    isLiked = false,
    addLike,
    removeLike,
    changeLike,
    changeNumber,
}) => {
    const [count, setCount] = useState(1)

    const onDecrementClick = () => {
        setCount(count - 1)
    }

    const onIncrementClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <Card id="relux">
                <CardContent>
                    <div className="service-img">
                        <img src={image} />
                    </div>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            isLiked
                                ? removeLike(id) && changeLike(id)
                                : addLike(id) && changeLike(id)
                        }
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>

                    <div className="category">
                        <h4>
                            <Link to={`/products/${id}`}>{name}</Link>
                        </h4>
                        <Button variant="text" color="secondary">
                            <Link
                                to={category}
                                style={{
                                    textDecoration: 'none',
                                    color: '#f50057',
                                }}
                            >
                                {category}
                            </Link>
                        </Button>
                    </div>
                    <p>{description}</p>
                    <div> Number of people: {quantity}</div>
                    <div> Time: {time} minutes </div>
                    <div> Age: {age}</div>
                    <div className="service-price">{price} $</div>
                    <Quantity
                        count={count}
                        onDecrementClick={onDecrementClick}
                        onIncrementClick={onIncrementClick}
                    />
                </CardContent>
                <CardActions className="btn-wrap">
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() =>
                            addProductToCart(id, count) &&
                            changeNumber(id, count)
                        }
                    >
                        <AddShoppingCartIcon style={{ marginRight: 10 }} />
                        Add to cart
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    quantity: PropTypes.number.isRequired,
    time: PropTypes.number.isRequired,
    age: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
    category: PropTypes.string,
    addProductToCart: PropTypes.func,
    id: PropTypes.number.isRequired,
    isLiked: PropTypes.bool,
    addLike: PropTypes.func,
    removeLike: PropTypes.func,
    changeLike: PropTypes.func,
    changeNumber: PropTypes.func,
}

ProductListItem.defaultProps = {
    description: 'Reload the page ...',
    image: '/images/defaultProps-image-noimage.jpg',
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
    addProductToCart: (id, count) =>
        dispatch({
            type: 'ADD_PRODUCT_TO_CART',
            id,
            count,
        }),
    addToFavorite: (id) =>
        dispatch({
            type: 'ADD_TO_FAVORITE',
            id,
        }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductListItem)
