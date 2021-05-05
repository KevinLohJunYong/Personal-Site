import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

const nameStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50vh',
};

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
     <Layout title="Home">
       <div 
       style={nameStyle}>
         <h1> Kevin Loh Jun Yong </h1>
       </div>
     </Layout>
  );
}
