import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import profilePic from '@site/static/img/profile_pic.png';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
     <Layout title="Home">
       <div 
       className={styles.me}>
         <img className={styles.profilePic} src={profilePic} />
         <h1> Kevin Loh Jun Yong </h1>
       </div>
     </Layout>
  );
}
