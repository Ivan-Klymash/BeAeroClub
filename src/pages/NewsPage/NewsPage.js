import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import { makeStyles } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import { Container } from 'react-bootstrap'
import 'animate.css'

const useStyles = makeStyles({
    newsBackgroundImg: {
        backgroundImage:
            'url(https://themes.muffingroup.com/be/aeroclub/wp-content/uploads/2018/11/aeroclub-subheader-bg.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        height: '350px',
        position: 'relative',
    },
    newsImg: {
        display: 'block',
        width: '100%',
        margin: '0 auto',
    },
    article: {
        padding: '10px 30px',
    },
    aricleTime: {
        color: 'grey',
    },
    aricleTitle: {
        padding: '10px 0',
    },
    aricleMore: {
        display: 'block',
        textAlign: 'center',
        paddingBottom: 10,
        textDecoration: 'none',
    },
    animateZoomIn: {
        animation: 'zoomIn',
        animationDuration: '4s',
    },
    '@media (max-width: 769px)': {
        newsBackgroundImg: {
            height: 'auto',
            padding: '120px 0',
        },
    },
})

const NewsPage = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.newsBackgroundImg}></div>
            <h1
                style={{
                    position: 'absolute',
                    top: '30%',
                    left: '30%',
                    color: 'white',
                }}
            >
                News and events Page
            </h1>
            <Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={1}
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        className={classes.animateZoomIn}
                    >
                        <Card>
                            <img
                                className={classes.newsImg}
                                src="./images/article-1.jpg"
                            />
                            <article className={classes.article}>
                                <div className={classes.aricleTime}>
                                    <AccessTimeIcon /> Nowember 22, 2018
                                </div>

                                <h4 className={classes.aricleTitle}>
                                    Balloon flight
                                </h4>
                                <p>
                                    A fascinating balloon ride over the
                                    picturesque landscapes under the guidance of
                                    an aeronaut pilot. Up to six participants
                                    will be on board.
                                </p>

                                <a
                                    href="https://en.wikipedia.org/wiki/Hot-air_balloon"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={classes.aricleMore}
                                >
                                    <AssignmentIcon /> Read more...
                                </a>
                            </article>
                        </Card>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        className={classes.animateZoomIn}
                    >
                        <Card>
                            <img
                                src="./images/article-2.jpg"
                                className={classes.newsImg}
                            />
                            <article className={classes.article}>
                                <div className={classes.aricleTime}>
                                    <AccessTimeIcon /> Nowember 22, 2018
                                </div>
                                <h4 className={classes.aricleTitle}>
                                    Hiking in the mountains
                                </h4>
                                <p>
                                    Walking tour of the Ukrainian Carpathians in
                                    a group. The hike will last two days. There
                                    are three routes of different lengths to
                                    choose from. The place of start and finish
                                    is the city of Ivano-Frankivsk.
                                </p>
                                <a
                                    href="https://en.wikipedia.org/wiki/Hiking"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={classes.aricleMore}
                                >
                                    <AssignmentIcon /> Read more...
                                </a>
                            </article>
                        </Card>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        className={classes.animateZoomIn}
                    >
                        <Card>
                            <img
                                src="./images/article-3.jpg"
                                className={classes.newsImg}
                            />
                            <article className={classes.article}>
                                <div className={classes.aricleTime}>
                                    <AccessTimeIcon /> Nowember 22, 2018
                                </div>
                                <h4 className={classes.aricleTitle}>
                                    ATV travel
                                </h4>
                                <p>
                                    Friends will arrange a high-speed race on a
                                    light SUV. Before arrival, they will be
                                    briefed on safety and provided with the
                                    necessary equipment.
                                </p>
                                <a
                                    href="https://en.wikipedia.org/wiki/All-terrain_vehicle"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={classes.aricleMore}
                                >
                                    <AssignmentIcon /> Read more...
                                </a>
                            </article>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default NewsPage
