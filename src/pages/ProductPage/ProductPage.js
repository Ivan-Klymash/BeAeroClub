import React from 'react'
import productsArray, {
    getProductsObj,
} from '../../components/Products/productsArray'
import PropTypes from 'prop-types'

const ProductPage = ({
    match,
    productsObj = getProductsObj(productsArray),
}) => {
    console.log(match)
    const id = match.params.id
    return (
        <>
            <h1> Products Page {productsObj[id].name}</h1>
            <div>{productsObj[id].image}</div>
        </>
    )
}

ProductPage.propTypes = {
    match: PropTypes.object,
    productsObj: PropTypes.object,
}

export default ProductPage
