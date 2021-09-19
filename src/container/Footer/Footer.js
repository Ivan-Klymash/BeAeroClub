/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import '../Footer/Footer.css'
import Grid from '@material-ui/core/Grid'

const Footer = () => {
    return (
        <Grid container direction="row" justifyContent="space-between">
            <div className="footer">
                <img src="images/aeroclub-footer-widget-image.png" alt="" />

                <div className="widget">
                    <h4>Localization</h4>
                </div>
                <div className="widget-text">
                    <p>Envato </p>
                    <p> Level 13, 2 Elizabeth</p>
                    <p> Victoria 3000</p>
                    <p> Australia</p>
                </div>

                <div className="widget">
                    <h4>Social media</h4>
                </div>
                <div className="widget-text">
                    <p>Facebook </p>
                    <p> Twitter</p>
                    <p> Google +</p>
                </div>

                <div className="widget">
                    <h4>Consultation</h4>
                </div>
                <div className="widget-text">
                    <h2 className="widget-text-number"> +23 456 643 324</h2>
                </div>

                <div className="footer-desc">
                    <p>
                        © 2021 Betheme by
                        <a href="https://muffingroup.com" target="_blank">
                            Muffin group
                        </a>
                        | All Rights Reserved | Powered by
                        <a href="https://wordpress.org" target="_blank">
                            WordPress
                        </a>
                    </p>
                </div>
                <div className="footer-button">
                    <a href="" className="back-to-top"></a>
                </div>
            </div>
        </Grid>
    )
}

export default Footer
