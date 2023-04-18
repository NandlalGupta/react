import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';

 import 'bootstrap/dist/css/bootstrap.min.css'
export default function home() {
    return (
        <Carousel fade>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/for1.jpg" layout="responsive" width="100" height="50" 
            alt="First slide"
          />
          <Carousel.Caption>
          <div className={styles.cards}>
          <h3>Toyata Fortuner</h3>
               <p>Mannual</p>
               <h4>RS- 11 Lakhs to  20 Lakhs.</h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image
            className="d-block w-100"
            src="/f3.jpg" layout="responsive" width="100" height="50" 
            alt="First slide"
          />
  
          
        </Carousel.Item>
        <Carousel.Item>
        <Image
            className="d-block w-100"
            src="/f1.jpg" layout="responsive" width="100" height="50" 
            alt="First slide"
          />
  
        </Carousel.Item>
        <Carousel.Item>
        <Image
            className="d-block w-100"
            src="/f2.jpg" layout="responsive" width="100" height="50" 
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <Image
            className="d-block w-100"
            src="/f4.JPG" layout="responsive" width="100" height="50" 
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    )
}