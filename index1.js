import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          BEST CAR IN INDIA
        </h1>

 
       <div className={styles.grid}>
          <div className={styles.card}>
            <Image src="/img4.jpeg" width="200" height="180px" />
            <h2>Scorpio</h2>
            <p>Automatic</p>
            <h4>RS 20.00 lakhs onwards</h4>
            <div className={styles.details}>
              <a href="/scorpio.js">View details</a>
            </div>
            </div>
            <div className={styles.card}>
            <Image src="/img2.jpeg" width="200" height="180px" />
            <h2>Forturner</h2>
            <p>Manual</p>
            <h4>RS 25.00 lakhs onwards</h4>
            <div className={styles.details}>
              <a href="https://www.carbike360.com/">View details</a>
            </div>
            </div>
            <div className={styles.card}>
            <Image src="/img1.jpeg"  width="200" height="180px" />
            <h2>Renault joe</h2>
            <p>Automatic</p>
            <h4>RS 8.00 lakhs onwards</h4>
            <div className={styles.details}>
              <a href="https://www.carbike360.com/">View details</a>
            </div>
            </div>
            <div className={styles.card}>
            <Image src="/img3.jpeg" width="200" height="180px" />
            <h2>Tata Curvv</h2>
            <p>Automatic</p>
            <h4>RS 20.00 lakhs onwards</h4>
            <div className={styles.details}>
              <a href="https://www.carbike360.com/">View details</a>
            </div>
            </div>
            </div>
            </main>
            </div>
            
  )
}