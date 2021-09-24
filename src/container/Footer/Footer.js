/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-wraper">
                    <div className="footer-row">
                        <div className="column">
                            <div className="widget">
                                <img
                                    src="/images/aeroclub-footer-widget-image.png"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="column">
                            <div className="widget">
                                <h4>Localization</h4>
                            </div>
                            <div className="widget-text">
                                <p>Envato </p>
                                <p> Level 13, 2 Elizabeth</p>
                                <p> Victoria 3000</p>
                                <p> Australia</p>
                            </div>
                        </div>

                        <div className="column">
                            <div className="widget">
                                <h4>Social media</h4>
                            </div>
                            <div className="widget-text">
                                <p>Facebook </p>
                                <p> Twitter</p>
                                <p> Google +</p>
                            </div>
                        </div>

                        <div className="column">
                            <div className="widget">
                                <h4>Consultation</h4>
                            </div>
                            <div className="widget-text">
                                <h2 className="widget-text-number">
                                    +23 456 643 324
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copy">
                <div className="footer-container">
                    <div className="footer-column">
                        <div className="footer-desc">
                            <p>
                                © 2021 Betheme by
                                <a
                                    href="https://muffingroup.com"
                                    target="_blank"
                                >
                                    Muffin group
                                </a>
                                | All Rights Reserved | Powered by
                                <a href="https://wordpress.org" target="_blank">
                                    WordPress
                                </a>
                            </p>
                        </div>
                        <div className="footer-button">
                            <a href="#top" className="back-to-top"></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
