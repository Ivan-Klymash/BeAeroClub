import { Card, Grid } from '@material-ui/core'
import React from 'react'
import 'animate.css'

const StoryPage = () => {
    return (
        <>
            <div className="storyBackgroundImage"></div>
            <h1
                style={{
                    position: 'absolute',
                    top: '55%',
                    left: '40%',
                    color: 'white',
                }}
            >
                Story Page
            </h1>
            <h3 style={{ width: '60%', margin: '60px auto', fontSize: 20 }}>
                We have been operating in the market for almost 20 years, during
                which time we have served tens of thousands of customers who
                come back to us again and again. But it is not easy. The
                professionalism of our employees, high requirements for service
                and regular improvement allow us to maintain a leading position.
                We value our customers, and our customers enjoy the service.
            </h3>
            <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                // spacing={1}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    style={{ marginBottom: '20px' }}
                >
                    <Card className="storyPageImg">
                        <a
                            href="https://themes.muffingroup.com/be/aeroclub/wp-content/uploads/2018/11/aeroclub-story-gallery-1.jpg"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                style={{ width: '100%' }}
                                src="https://themes.muffingroup.com/be/aeroclub/wp-content/uploads/2018/11/aeroclub-story-gallery-1.jpg"
                            />
                        </a>
                    </Card>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    style={{ marginBottom: '20px' }}
                >
                    <Card className="storyPageImg">
                        <a
                            href="https://themes.muffingroup.com/be/aeroclub/wp-content/uploads/2018/11/aeroclub-story-gallery-2.jpg"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                style={{ width: '100%' }}
                                src="https://themes.muffingroup.com/be/aeroclub/wp-content/uploads/2018/11/aeroclub-story-gallery-2.jpg"
                            />
                        </a>
                    </Card>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    style={{ marginBottom: '20px' }}
                >
                    <Card className="storyPageImg">
                        <a
                            href="https://themes.muffingroup.com/be/aeroclub/wp-content/uploads/2018/11/aeroclub-story-gallery-3.jpg"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                style={{ width: '100%' }}
                                src="https://themes.muffingroup.com/be/aeroclub/wp-content/uploads/2018/11/aeroclub-story-gallery-3.jpg"
                            />
                        </a>
                    </Card>
                </Grid>
            </Grid>
            <p style={{ width: '60%', margin: '40px auto 20px', fontSize: 14 }}>
                We provide full advice on each product. We answer each of your
                questions as quickly and accurately as possible. In addition, we
                make a purchase immediately, immediately after receiving your
                order.
            </p>
            <div className="what-we-do-left-button storyPageButton">
                <a
                    href="https://uk.wikipedia.org/wiki/%D0%A0%D1%83%D0%BB%D1%8C_%D0%BD%D0%B0%D0%BF%D1%80%D1%8F%D0%BC%D0%BA%D1%83"
                    target="_blank"
                    rel="noreferrer"
                >
                    <span>Read more</span>
                </a>
            </div>
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                // spacing={2}
            >
                <Grid item xs={12} sm={6} md={4}>
                    <div className="story-page-bgimg"></div>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <p style={{ margin: '0 20px' }}>
                        The first plane was made of spruce planks, its
                        population length was 6.4 meters, height - 2.7 meters,
                        spread. the ropeller drives a chain transmission similar
                        to a bicycle. Over the next two years, they continued to
                        improve the design of the airplane and made more than
                        200 flights. May 22, 1906 received a patent for his
                        invention. In 1908, they made a series of trips around
                        the world, demonstrating the capabilities of their
                        aircraft. In 1909, the brothers formed the Wright
                        Company, which manufactured aircraft and trained pilots.
                    </p>
                    <ul>
                        <li style={{ listStyle: 'none', marginBottom: '20px' }}>
                            <h6 className=" story-page-title">
                                Airplane design
                                <span
                                    style={{
                                        backgroundColor: '#d2d2d2',
                                        transition: 'margin-right 2s',
                                    }}
                                >
                                    75 %
                                </span>
                            </h6>
                            <div className="story-page-progress">
                                <span className="story-page-progress-line"></span>
                            </div>
                        </li>
                        <li style={{ listStyle: 'none' }}>
                            <h6 className="story-page-title">
                                Flight distance
                                <span style={{ backgroundColor: '#d2d2d2' }}>
                                    50 %
                                </span>
                            </h6>
                            <div className="story-page-progress">
                                <span className="story-page-progress-second-line"></span>
                            </div>
                        </li>
                    </ul>
                </Grid>
                <section>
                    <p style={{ margin: '40px 40px 10px' }}>
                        The first plane on which people were able to break away
                        from the ground and make a horizontal flight was the
                        Flyer, built by brothers Orville and Wilber Wright in
                        the United States. The first known flight in the history
                        of mankind was made on December 17, 1903. Flyer lasted
                        in the air for 59 seconds and flew 260 meters. Wrights
                        invention was officially recognized as the worlds first
                        heavier-than-air aircraft to fly a manned engine. Their
                        aircraft was a biplane type duck - the pilot was placed
                        on the lower wing, the rudder in the rear, the rudder
                        height in front. The double-wing wings were lined with
                        thin unbleached muslin. The Flyer engine was
                        four-stroke, with a starting power of 16 horsepower and
                        weighed only 80 kg. The device had two wooden screws.
                        Instead of a wheeled chassis, Wright used a launch
                        catapult, which consisted of a pyramidal tower and a
                        wooden guide rail. The catapult was driven by a massive
                        falling cargo connected to the aircraft by a cable
                        through a system of special blocks.
                    </p>
                    <img
                        src="../images/aeroclub-story-model.jpg"
                        className="story-page-img"
                    />
                </section>
            </Grid>
            <br />
            <div className="fixed">
                <div className="area">
                    <img src="https://themes.muffingroup.com/be/aeroclub/wp-content/uploads/2018/11/aeroclub-story-glider.jpg" />
                </div>
            </div>
        </>
    )
}

export default StoryPage
