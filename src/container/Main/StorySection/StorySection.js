import React from 'react'
import '../StorySection/StorySection.css'
import { Link } from 'react-router-dom'

const StorySection = () => {
    return (
        <section className="story">
            <div className="container-story">
                <div className="row-story">
                    <div className="half-a-page">
                        <div className="story-text">
                            <h2 className="story-text-title">
                                Lorem ipsum do
                                <br />
                                mni vanit
                            </h2>
                            <p className="story-text-paragraph">
                                Fusce ut velit laoreet, tempus arcu eu, molestie
                                tortor. Nam vel justo cursus, faucibus lorem
                                eget, egestas eros. Maecenas eleifend erat at
                                justo fringilla imperdiet id ac magna.
                                Suspendisse vel facilisis odio, at ornare nibh.
                            </p>

                            <Link to="/story">Read more </Link>
                        </div>
                    </div>
                    <div className="story-photo half-a-page"></div>
                </div>
                <div className="what-we-do">
                    <div className="aeroclub-logo"></div>
                    <div className="what-we-do-text">
                        <p>
                            See what were doing from <br /> time to time
                        </p>
                    </div>
                    <div className="what-we-do-button">
                        <div className="what-we-do-left-button">
                            <Link to="/flights">
                                <span className="what-we-do-left-button-text">
                                    Read more
                                </span>
                            </Link>
                        </div>
                        <div className="what-we-do-right-button">
                            <Link to="/flights">
                                <span className="what-we-do-right-button-text">
                                    Read more
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StorySection
