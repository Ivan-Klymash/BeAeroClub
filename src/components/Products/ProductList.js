import Typography from '@material-ui/core/Typography'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import ProductListItem from './ProductListItem'
import Line from './Line'
// import productsArray from './productsArray'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const useStyles = makeStyles({
    aboutColumn: {
        display: 'flex',
    },
    aboutLeftColumnImg: {
        height: '66px',
        width: '15%',
        margin: '0 1% 40px',
    },
    aboutLeftColumnText: {
        fontSize: '16px',
        lineHeight: '28px',
        fontWeight: 700,
        width: '35%',
        margin: '0 80px 0 40px',
        paddingTop: '11px',
        color: '#ff0e0e',
    },
    aboutRightColumnText: {
        padding: '0 53px',
        fontSize: '24px',
        lineHeight: '34px',
        fontWeight: 500,
        color: '#0d2156',
        margin: '0 1% 40px',
    },

    '@media (max-width: 769px)': {
        aboutLeftColumnText: {
            margin: '0px 20px 0px 40px',
        },
        aboutRightColumnText: {
            padding: '0px',
            fontSize: '15px',
            lineHeight: '25px',
        },
    },
})

const ProductsList = ({ productsArray, changeLike, changeNumber }) => {
    const classes = useStyles()
    return (
        <>
            <Line />

            <div className={classes.aboutColumn}>
                <div className={classes.aboutLeftColumnImg}>
                    <img src="./images/aeroclub-home-airplane-logo.png" />
                </div>
                <p className={classes.aboutLeftColumnText}>
                    Lorem ipsum dolo amet consec or sit
                </p>
                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    className={classes.aboutRightColumnText}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqunim ad minim veniam exe
                </Typography>
            </div>
            <h5 style={{ textAlign: 'center', margin: '20px 0px' }}>
                <b>Buy a certificate for the tour:</b>
            </h5>
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
                                changeNumber={changeNumber}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

ProductsList.propTypes = {
    changeLike: PropTypes.func,
    productsArray: PropTypes.array,
    changeNumber: PropTypes.func,
}

const mapStateToProps = (state) => ({
    productsArray: state.products,
})

export default connect(mapStateToProps)(ProductsList)
