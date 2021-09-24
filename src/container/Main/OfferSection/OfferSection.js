import React from 'react'
import '../OfferSection/OfferSection.css'

const StorySection = () => {
    return (
        <section className="offer">
            <div className="image-links">
                <a
                    href="https://themes.muffingroup.com/be/aeroclub/wp-content/uploads/2018/11/aeroclub-home-gallery-3.jpg"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="our-offer"
                        src="images/offer-1.jpg"
                        alt=""
                    />
                </a>
            </div>
            <div className="image-links">
                <a
                    href="https://themes.muffingroup.com/be/aeroclub/wp-content/uploads/2018/11/aeroclub-home-gallery-2.jpg"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="our-offer"
                        src="images/offer-2.jpg"
                        alt=""
                    />
                </a>
            </div>
            <div className="image-links">
                <a
                    href="https://themes.muffingroup.com/be/aeroclub/wp-content/uploads/2018/11/aeroclub-home-gallery-1.jpg"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="our-offer"
                        src="images/offer-3.jpg"
                        alt=""
                    />
                </a>
            </div>
        </section>
    )
}

export default StorySection
