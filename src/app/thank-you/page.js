"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { Container, Row, Col } from "react-bootstrap";
// CSS
import styles from "@/styles/Newhomeanner.module.css";


export default function ThankYou() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  useEffect(() => {
    const delay = 10000;
    const timeoutId = setTimeout(() => {
      setImagesLoaded(true);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {imagesLoaded &&
        <>
          {/* Google tag (gtag.js) */}
          <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=AW-11114809734"></Script>
          <Script>
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11114809734')`};
          </Script>
          {/* <!-- Event snippet for Website lead conversion page --> */}
          <Script>
            {`gtag('event', 'conversion', {'send_to': 'AW-11114809734/O9snCOO5m5EYEIaT-rMp'});`}
          </Script>
        </>
      }

      <main>
        <section className={styles.thankYou}>
          <Container>
            <Row className={styles.bannnerproject}>
              <Col lg={8} className="mx-auto">
                <div className={styles.banerTxt}>
                  <h1 className="font65 white fontf font-bold line60">
                    <span className="grdiant font-bold">Thank You</span>
                  </h1>
                  <p className="white fontf font16 font-medium line30">
                    Welcome to the community, your personalized experience
                    awaits!
                  </p>
                  <div className={`${styles.bttnsto} justify-content-center`}>
                    <Link className={styles.bttns2} href="/">
                      Back To Home
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}
