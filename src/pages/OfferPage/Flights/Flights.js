import React from 'react'
import Grid from '@material-ui/core/Grid'
import ProductListItem from '../../../components/Products/ProductListItem'
// import productsArray from '../../../components/Products/productsArray'
import PropTypes from 'prop-types'
import Testemonials from '../../../components/Testimonials/Testimonials'
import { connect } from 'react-redux'
import OfferPageHeader from '../OfferPageHeader'

const Flights = ({ productsArray, changeLike, changeNumber }) => {
    if (productsArray.length === 0) {
        return null
    } else {
        return (
            <>
                <OfferPageHeader />
                <h2
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Flights:
                </h2>
                <p
                    style={{
                        textAlign: 'center',
                        fontSize: 18,
                        padding: '0 2px',
                    }}
                >
                    <ins>
                        Parachuting courses, flights, sky diving and more...
                    </ins>
                </p>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    // spacing={1}
                >
                    {productsArray
                        .filter((item) => item.category === 'flights')
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
                                        changeLike={changeLike}
                                        changeNumber={changeNumber}
                                    />
                                </Grid>
                            )
                        )}
                </Grid>
                <Testemonials />
            </>
        )
    }
}

Flights.propTypes = {
    addProductToCart: PropTypes.func,
    productsArray: PropTypes.array,
    changeLike: PropTypes.func,
    changeNumber: PropTypes.func,
}

const mapStateToProps = (state) => ({
    productsArray: state.products,
})

export default connect(mapStateToProps)(Flights)
