import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    offer: {
        backgroundImage: 'url(images/offer.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        height: '550px',
    },
    video: {
        display: 'block',
        textAlign: 'center',
        marginTop: '-60px',
        '&:hover': {
            transform: 'scale(1.02)',
            transition: 'transform 1s',
        },
    },
    '@media (max-width: 769px)': {
        offer: {
            height: '414px',
        },
    },
})

const OfferPageHeader = () => {
    const classes = useStyles()
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
            <section className={classes.video}>
                <a
                    href="https://www.youtube.com/watch?v=z0jjTU-H43M"
                    target="_blank"
                    rel="noreferrer"
                    title="Click to watch the video"
                >
                    <video
                        width="60%"
                        preload="metodata"
                        controls
                        poster="https://themes.muffingroup.com/be/aeroclub/wp-content/uploads/2018/11/aeroclub-about-play-movie.jpg"
                    ></video>
                </a>
            </section>
        </>
    )
}

export default OfferPageHeader
