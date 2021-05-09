import React from 'react';
import Layout from '@theme/Layout';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import styles from '../styles.module.css';
import { Divider } from "@react-md/divider";

export default function Skills() {
    return (
        <div style={{marginTop: '250px',width: '50%' }}>
            <h1 className={styles.words} style={{marginTop:'-60px'}}>
                Skills
            </h1>
            <Box className={styles.outerBox}>
                   <Box className={styles.innerBox}>
                      Languages
                   </Box>
            </Box>
            <Box className={styles.outerBox}>
                   <Box className={styles.innerBox}>
                      FrontEnd
                   </Box>
            </Box>
            <Box className={styles.outerBox}>
                   <Box className={styles.innerBox}>
                      BackEnd
                   </Box>
            </Box>
            <Box className={styles.outerBox}>
                   <Box className={styles.innerBox}>
                      DataBase
                   </Box>
            </Box>
      </div>
    );
}