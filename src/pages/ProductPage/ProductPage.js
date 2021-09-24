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
            <h1> Products Page </h1>
            <h2> {productsObj[id].name} </h2>
            <p
                dangerouslySetInnerHTML={{ __html: productsObj[id].showImages }}
            ></p>
        </>
    )
}

ProductPage.propTypes = {
    match: PropTypes.object,
    productsObj: PropTypes.object,
}

export default ProductPage
