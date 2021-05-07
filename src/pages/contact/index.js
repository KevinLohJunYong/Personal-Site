import React from 'react';
import Layout from '@theme/Layout';
import styles from '../styles.module.css';
import Particles from "react-particles-js";

const particles = {
    number: {
        value: window.innerWidth < 600 ? 50 : 100,
    },
    size: {
        value: 3,
    },
    
}
const particlesConfig = {
  particles: {
      number: {
          value: window.innerWidth < 600 ? 50 : 100,
      },
      size: {
          value: 3,
      },
  },
  interactivity: {
      detect_on:"window",
      events: {
          onhover: {
              enable: true,
              mode: "repulse"
          }
      }
  }
}
export default function Contact() {
    return (
       <Layout>
           <div>
           <h1 className={styles.wordsInContactPage1}>
              Thank you for your interest! 
           </h1>
           <h2 className={styles.wordsInContactPage2}>
              You can click the link below to contact me
              <h3 style={{marginTop:"20px"}}>
              <a 
              style={{marginLeft:"190px"}}
              href={"mailto:e0439232@u.nus.edu"}> 
              e0439232@u.nus.edu
              </a>
              </h3>
           </h2>
           <Particles className={styles.particles} params={particlesConfig} />
           </div>
       </Layout>
    );
}