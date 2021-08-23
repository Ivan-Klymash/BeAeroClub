import React from 'react'
import PropTypes from 'prop-types'

const CartProductListItem = ({ product, productCount }) => {
    return (
        <>
            <div>
                {product.name} : {productCount}
            </div>
        </>
    )
}

CartProductListItem.propTypes = {
    product: PropTypes.object,
    productCount: PropTypes.number,
}

export default CartProductListItem
