import React, { useState, useEffect } from "react";
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import profilePic from '@site/static/img/profile_pic.png';
import Typist from "react-typist";
import {Grid, Typography} from "@material-ui/core";
import Particles from "react-particles-js";
import "./index.css";

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
export default function Home() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("Count: " + count);
    setCount(1);
  }, [count]);

  return (
     <Layout title="Home">
       <div 
       className={styles.center}>
         <img className={styles.profilePic} src={profilePic} />
         <h1 className={styles.header}> Hello, I'm Kevin and </h1>     
         {count ? (
        <Typist className={styles.words} avgTypingDelay={50} onTypingDone={() => setCount(0)} >
          <span> I'm a CS undergrad at NUS! </span>
          <Typist.Backspace count={22} delay={500} />
          <span> software engineer! </span>
          <Typist.Backspace count={24} delay={500} />
          <span> love programming! </span>
          <Typist.Backspace count={18} delay={500} />
          <span> built this website using ReactJS! </span>
        </Typist>
      ) : (
        ""
      )}
        <Particles className={styles.particles} params={particlesConfig} />
       </div>
     </Layout>
  );
}
