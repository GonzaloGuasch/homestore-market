import React, { Fragment } from 'react'
import bravo from '../images/23f.jpg'
import carrusel from '../images/carrusel.jpg'
import { Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';


export default function Carrusel(){
    return(
        <Fragment>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carrusel}
      alt="First slide"
      height="300px"
      width="400px"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carrusel}
      alt="Third slide"
      height="300px"
      width="400px"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carrusel}
      alt="Third slide"
      height="300px"
      width="400px"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Fragment>
    )

}