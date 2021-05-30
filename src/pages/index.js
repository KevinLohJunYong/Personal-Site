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
import "./index.css";
import codingWallPaper from '../../static/img/codingWallPaper3.png';
import Zoom from 'react-reveal/Zoom';

export default function Home() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("Count: " + count);
    setCount(1);
  }, [count]);

  return (
     <Layout>
       <div 
       className={styles.center} style={{backgroundImage: 'url('+codingWallPaper+')',
       backgroundSize: "cover",position:"fixed",
       height: "100%",width:"100%"}}>
         <img className={styles.profilePic} src={profilePic}/>
         <h1 className={styles.header}> Hello, I'm Kevin! </h1>   
         <h1 className={styles.header} style={{marginTop:"2%"}}> I built this website using ReactJS and </h1> 
         {count ? (
        <Typist className={styles.words} avgTypingDelay={50} onTypingDone={() => setCount(0)} >
          <span> I'm a CS undergrad at NUS! </span>
          <Typist.Backspace count={22} delay={500} />
          <span> software engineer! </span>
          <Typist.Backspace count={24} delay={500} />
          <span> love programming! </span>
        </Typist>
      ) : (
        ""
      )}
       </div>
     </Layout>
  );
}



