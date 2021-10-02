import React from 'react'
import productsArray, {
    getProductsObj,
} from '../../components/Products/productsArray'
import PropTypes from 'prop-types'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import { Grid } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PinterestIcon from '@material-ui/icons/Pinterest'

const styles = {
    textAlign: 'center',
}
const marginRight = {
    marginRight: 10,
}

const ProductPage = ({
    match,
    productsObj = getProductsObj(productsArray),
}) => {
    // console.log(match)
    const id = match.params.id
    return (
        <>
            <h2> Products Page </h2>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
                <Grid item xs={12} sm={6} md={4}>
                    <h3 style={styles}>{productsObj[id].name}</h3>
                    <p style={styles}>
                        <AccessTimeIcon /> Nowember 22, 2018
                    </p>
                    <p
                        style={styles}
                        dangerouslySetInnerHTML={{
                            __html: productsObj[id].showImages,
                        }}
                    ></p>
                </Grid>
                <div>
                    <p
                        style={{
                            backgroundColor: '#0d2156',
                            color: 'white',
                            fontSize: '18px',
                            lineHeight: '21px',
                            textIndent: '12px',
                            padding: '40px 0',
                            marginTop: '-10px',
                        }}
                    >
                        Praesent nec sapien mauris dui non augue. Nulla mi non
                        magna. Fusce blandit ultrices posuere in, ipsum. Fusce
                        facilisis dignissim faucibus, tortor a nulla. Integer
                        convallis viverra, enim aliquam odio. Suspendisse semper
                        sollicitudin. Praesent et ultrices posuere cubilia. Nemo
                        enim.
                    </p>
                </div>

                <Grid item xs={12} sm={6} md={4}>
                    <h6 className="first-letter">
                        Lorem ipsum dolor sit amet enim, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia.
                    </h6>
                    <p>
                        Etiam at turpis. Etiam tempor auctor, ante ipsum
                        consectetuer at, viverra accumsan, libero odio a dolor
                        tellus vulputate leo sed ante. Vestibulum ante
                        pellentesque quis, pellentesque sagittis vel, consequat
                        wisi. Proin posuere. Quisque at nulla. Maecenas eleifend
                        mauris rhoncus suscipit. Suspendisse nulla dictum
                        accumsan sed, euismod pede, nec dui. Morbi placerat
                        vehicula neque. Praesent in vestibulum sed, vestibulum
                        id, elit. Aenean mollis orci. Nullam justo facilisis
                        pharetra. Suspendisse sed dolor sit amet dignissim
                        massa. Duis mauris consequat sapien mauris vehicula ut,
                        consectetuer adipiscing eget, bibendum pede. Vestibulum
                        semper convallis. Praesent elit aliquet at, vehicula.
                    </p>
                    <p>
                        Praesent nec sapien mauris dui non augue. Nulla mi non
                        magna. Fusce blandit ultrices posuere in, ipsum. Fusce
                        facilisis dignissim faucibus, tortor a nulla. Integer
                        convallis viverra, enim aliquam odio. Suspendisse semper
                        sollicitudin.
                    </p>
                </Grid>
            </Grid>
            <hr />
            <div>
                <span style={{ marginRight: '30px' }}>Share</span>
                <a
                    style={marginRight}
                    href="https://m.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FacebookIcon className="social-networks" />
                </a>

                <a
                    style={marginRight}
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <TwitterIcon className="social-networks" />
                </a>

                <a
                    style={marginRight}
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <LinkedInIcon className="social-networks" />
                </a>
                <a
                    style={marginRight}
                    href="https://www.pinterest.com/search/pins/?q=domain:themes.muffingroup.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <PinterestIcon className="social-networks" />
                </a>
            </div>
            <hr />
        </>
    )
}

ProductPage.propTypes = {
    match: PropTypes.object,
    productsObj: PropTypes.object,
}

export default ProductPage
