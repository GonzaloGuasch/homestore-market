import React, { Fragment } from 'react'
import fotoUno from '../images/slider/CARAMELERA.png'
import fotoDos from '../images/slider/CARA.png'
import fotoTres from '../images/slider/CHOCODETALLE.png'
import fotoCuatro from '../images/slider/CHOCOLATERA.png'
import fotoCinco from '../images/slider/MOGDETALLE.png'
import fotoSeis from '../images/slider/MOGULERA.png'

import { Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';


export default function Carrusel(){
    return(
        <Fragment>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fotoUno}
      alt="First slide"
      height="400px"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={fotoDos}
      alt="First slide"
      height="400px"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={fotoTres}
      alt="First slide"
      height="400px"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={fotoCuatro}
      alt="First slide"
      height="400px"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={fotoCinco}
      alt="First slide"
      height="400px"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={fotoSeis}
      alt="First slide"
      height="400px"
    />
  </Carousel.Item>
</Carousel>
      </Fragment>
    )

}