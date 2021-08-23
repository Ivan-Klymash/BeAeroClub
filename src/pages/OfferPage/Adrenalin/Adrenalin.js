import React from 'react'
import Grid from '@material-ui/core/Grid'
import ProductListItem from '../../../components/Products/ProductListItem'
import productsArray from '../../../components/Products/productsArray'
import PropTypes from 'prop-types'
import Testemonials from '../../../components/Testimonials/Testimonials'

const Adrenalin = ({ addProductToCart }) => {
    return (
        <>
            <h2
                style={{
                    textAlign: 'center',
                }}
            >
                Adrenalin:
            </h2>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={1}
            >
                {productsArray
                    .filter((item) => item.category === 'adrenalin')
                    .map(
                        ({
                            id,
                            name,
                            description,
                            quantity,
                            time,
                            age,
                            price,
                            image,
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
                                    addProductToCart={addProductToCart}
                                />
                            </Grid>
                        )
                    )}
            </Grid>
            <Testemonials />
        </>
    )
}

Adrenalin.propTypes = {
    addProductToCart: PropTypes.func,
}

export default Adrenalin
