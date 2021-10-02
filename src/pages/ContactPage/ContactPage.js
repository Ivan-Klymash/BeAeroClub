import React from 'react'
import { makeStyles } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import MailIcon from '@material-ui/icons/Mail'
import LinkIcon from '@material-ui/icons/Link'

const useStyles = makeStyles({
    contactBgImg: {
        backgroundImage:
            'url(https://themes.muffingroup.com/be/aeroclub/wp-content/uploads/2018/11/aeroclub-contact-mountains-bg.jpg)',
        height: '60vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    },
    contactTitle: {
        color: 'white',
        paddingTop: '6%',
        paddingLeft: '15%',
    },
    contactTouch: {
        display: 'flex',
        width: '100%',
    },
    halfPage: {
        width: '50%',
    },
    contactImages: {
        width: '100%',
        height: '350px',
        marginLeft: '35%',
        marginTop: '-60px',
    },
    contactBox: {
        backgroundColor: 'tomato',
        width: '24%',
        height: 'iherit',
        marginTop: '-60px',
        marginLeft: '10%',
        padding: '10px',
    },
    contactBoxItem: {
        listStyle: 'none',
        color: 'white',
        padding: 4,
        marginTop: 25,
    },

    contactBoxItemLink: {
        color: 'white',
    },
    sectionWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: '75px',
        paddingBottom: '25px',
    },
    sectionImage: {
        width: '100%',
        padding: '10px 60px',
    },
    '@media (max-width: 426px)': {
        contactImages: {
            display: 'none',
        },
        contactBox: {
            width: '80%',
        },
        halfPage: {
            width: 'auto',
        },
        sectionWrapper: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
})

const styles = {
    textDecoration: 'none',
    paddingLeft: '15px',
    marginTop: '10px',
    textAlign: 'right',
}
const liStyle = {
    color: 'black',
    paddingTop: 10,
}

const ContactPage = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.contactBgImg}>
                <h1 className={classes.contactTitle}>Contact Page</h1>
                <h2
                    style={{
                        color: 'white',
                        paddingLeft: '10%',
                        paddingTop: '50px',
                    }}
                >
                    Lets do something great together
                </h2>
            </div>
            <section className={classes.contactTouch}>
                <div className={classes.halfPage}>
                    <img
                        className={classes.contactImages}
                        src="/images/contact-image.jpg"
                    />
                </div>
                <div className={classes.contactBox}>
                    <h4 style={{ color: 'white', paddingTop: '10px' }}>
                        Contacts:
                    </h4>
                    <div>
                        <ul className={classes.contactBoxItem}>
                            <li>
                                <span style={liStyle}>
                                    <LocationOnIcon />
                                </span>
                                <span style={styles}>
                                    Envato <br /> Level 13, 2 Elizabeth St,
                                    <br />
                                    Melbourne, Victoria 3000 <br /> Australia
                                </span>
                            </li>
                            <li style={liStyle}>
                                <span>
                                    <PhoneIcon />
                                </span>
                                <a
                                    style={styles}
                                    className={classes.contactBoxItemLink}
                                    href="tel:+61(0)45959522"
                                    title="Call us"
                                >
                                    +61 (0) 4 59595 22
                                </a>
                            </li>
                            <li style={liStyle}>
                                <span>
                                    <PhoneIcon />
                                </span>
                                <a
                                    style={styles}
                                    className={classes.contactBoxItemLink}
                                    href="tel:+61(0)45959523"
                                    title="Call us"
                                >
                                    +61 (0) 4 59595 23
                                </a>
                            </li>
                            <li style={liStyle}>
                                <span>
                                    <MailIcon />
                                </span>
                                <a
                                    style={styles}
                                    className={classes.contactBoxItemLink}
                                    href="mailto:noreplay@envato.com"
                                    title="Write to us"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    noreplay@envato.com
                                </a>
                            </li>
                            <li style={liStyle}>
                                <span>
                                    <LinkIcon />
                                </span>
                                <a
                                    style={styles}
                                    className={classes.contactBoxItemLink}
                                    href="https://www.envato.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    www.envato.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className={classes.sectionWrapper}>
                <div>
                    <h6 style={{ color: 'red' }}>Consultation:</h6>
                    <div style={{ fontSize: '1.2rem', paddingBottom: '10px' }}>
                        +23 454 05 234
                    </div>
                </div>
                <div>
                    <h3 style={{ paddingBottom: '10px' }}>Address</h3>
                    <p>
                        Aliquam ac dui vel <br /> dui vulputate consectetur.
                    </p>
                </div>
                <div>
                    <h3 style={{ paddingBottom: '10px' }}>Open</h3>
                    <p>
                        Mon-Fri: 10:00 - 20:00 <br /> Sat: 10:00 - 16:00
                    </p>
                </div>
            </section>
            <section>
                <img
                    className={classes.sectionImage}
                    src="./images/aeroclub-contact-man.jpg"
                />
            </section>
        </>
    )
}

export default ContactPage
