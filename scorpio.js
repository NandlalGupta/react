import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
export default function home() {
    return (
        <Carousel fade>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="/sco1.jpg" layout="responsive" width="100" height="50" 
            alt="First slide"
          />
          <Carousel.Caption>
          <div className={styles.cards}>
          <h3>Mahindra Scorpio</h3>
               <p>Automatic Car</p>
               <h4>RS- 9.20 Lakhs to  20 Lakhs.</h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image
            className="d-block w-100"
            src="/s3.jpg" layout="responsive" width="100" height="50" 
            alt="First slide"
          />
  
          
        </Carousel.Item>
        <Carousel.Item>
        <Image
            className="d-block w-100"
            src="/s1.jpg" layout="responsive" width="100" height="50" 
            alt="First slide"
          />
  
        </Carousel.Item>
        <Carousel.Item>
        <Image
            className="d-block w-100"
            src="/s2.jpg" layout="responsive" width="100" height="50" 
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <Image
            className="d-block w-100"
            src="/s4.jpg" layout="responsive" width="100" height="50" 
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    )
}