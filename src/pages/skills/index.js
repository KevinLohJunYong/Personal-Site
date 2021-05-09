import React from 'react';
import Layout from '@theme/Layout';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import styles from '../styles.module.css';
import { Divider } from "@react-md/divider";
import { red } from '@material-ui/core/colors';


export default function Skills() {
    return (
        <div style={{marginTop:"100px"}}>
        <h1 style={{color:"white",textAlign:"center"}}>
            Skills
        </h1>
        <Box className={styles.outerBox}>
            <Box className={styles.innerBox}>
                Languages
            </Box>
        </Box>
        <Box className={styles.outerBox} style={{marginTop:"10px"}}>
            <Box className={styles.innerBox}>
                FrontEnd
            </Box>
        </Box>
        <Box className={styles.outerBox} style={{marginTop:"10px"}}>
            <Box className={styles.innerBox}>
                BackEnd
            </Box>
        </Box>
        <Box className={styles.outerBox} style={{marginTop:"10px"}}>
            <Box className={styles.innerBox}>
                DataBases
            </Box>
        </Box>
        </div>
    );
}