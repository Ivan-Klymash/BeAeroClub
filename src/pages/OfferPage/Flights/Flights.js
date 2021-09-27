import React from 'react'
import Grid from '@material-ui/core/Grid'
import ProductListItem from '../../../components/Products/ProductListItem'
// import productsArray from '../../../components/Products/productsArray'
import PropTypes from 'prop-types'
import Testemonials from '../../../components/Testimonials/Testimonials'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    offer: {
        backgroundImage: 'url(images/offer.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '480px',
        position: 'relative',
    },
})

const Flights = ({ productsArray }) => {
    const classes = useStyles()
    if (productsArray.length === 0) {
        return null
    } else {
        return (
            <>
                <div className={classes.offer}>
                    <span>
                        <i
                            style={{
                                color: 'white',
                                fontSize: 28,
                                position: 'absolute',
                                top: 'calc(50% - 100px)',
                                left: '6%',
                            }}
                        >
                            You can buy our certificates <br /> and attend our
                            courses
                        </i>
                    </span>
                </div>
                <section>
                    <video
                        width="750"
                        height="500"
                        autoPlay
                        controls
                        src="https://www.youtube.com/watch?v=z0jjTU-H43M"
                        poster="https://themes.muffingroup.com/be/aeroclub/wp-content/uploads/2018/11/aeroclub-about-play-movie.jpg"
                    ></video>
                </section>

                <h2
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Flights:
                </h2>
                <p style={{ textAlign: 'center', fontSize: 18 }}>
                    <ins>
                        Parachuting courses, flights, sky diving and more...
                    </ins>
                </p>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={1}
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
                                        // addProductToCart={addProductToCart}
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
}

const mapStateToProps = (state) => ({
    productsArray: state.products,
})

export default connect(mapStateToProps)(Flights)
