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

const Adrenalin = ({ addProductToCart, productsArray }) => {
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
                <h2
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Adrenalin:
                </h2>
                <p style={{ textAlign: 'center', fontSize: 18 }}>
                    <ins>
                        Climbing courses, riding ATVs, paintball and more...
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
}

Adrenalin.propTypes = {
    addProductToCart: PropTypes.func,
    productsArray: PropTypes.array,
}

const mapStateToProps = (state) => ({
    productsArray: state.products,
})

export default connect(mapStateToProps)(Adrenalin)
