import React from 'react'
import { Carousel } from 'react-bootstrap'
import TelegramIcon from '@material-ui/icons/Telegram'

import image1 from './../../../assets/background-images/slider-slide1.jpg'
import image2 from './../../../assets/background-images/slider-slide2.jpg'
import image3 from './../../../assets/background-images/slider-slide3.jpg'

const Slider = () => {
    return (
        <Carousel fade={true} pause={false}>
            <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={image1} alt="First slide" />

                <Carousel.Caption>
                    <a href="#relux" className="slider-btn">
                        Relax with us <TelegramIcon />
                    </a>
                    <h3>How are our travels</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <a href="#relux" className="slider-btn">
                        Relax with us <TelegramIcon />
                    </a>
                    <h3>How are our travels</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={image3} alt="Third slide" />
                <Carousel.Caption>
                    <a href="#relux" className="slider-btn">
                        Relax with us <TelegramIcon />
                    </a>
                    <h3>How are our travels</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider
