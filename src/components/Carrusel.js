import React, { Fragment } from 'react'
import bravo from '../images/23f.jpg'
import { Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';


export default function Carrusel(){
    return(
        <Fragment>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bravo}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bravo}
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={bravo}
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Fragment>
    )

}