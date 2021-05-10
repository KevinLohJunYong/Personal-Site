import React from 'react';
import Layout from '@theme/Layout';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import styles from '../styles.module.css';
import pythonLogo from '../../../static/img/skillsLogos/pythonLogo.png';
import cPlusPlusLogo from '../../../static/img/skillsLogos/c++Logo.png';
import javaLogo from '../../../static/img/skillsLogos/javaLogo.png';
import JSLogo from '../../../static/img/skillsLogos/JSLogo.png';
import reactJSLogo from '../../../static/img/skillsLogos/reactJSLogo.png';
import railsLogo from '../../../static/img/skillsLogos/railsLogo.png';
import postGreSqlLogo from '../../../static/img/skillsLogos/postGreSqlLogo.png';

export default function Skills() {
    return (
        <Layout>
        <div style={{marginTop:"100px"}}>
        <h1 style={{color:"white",textAlign:"center"}}>
            My Programming Skills
        </h1>
        <Box className={styles.outerBox} style={{marginTop:"30px"}}>
            <Box className={styles.innerBox}>
                Languages
            </Box>
            <img src={pythonLogo} alt="python" style={{width: "auto", maxWidth:"100px", maxHeight:"90%",margin:"10px"}} />
            <img src={cPlusPlusLogo} alt="c++" style={{width: "auto", maxWidth:"100px", maxHeight:"90%",margin:"10px"}} />
            <img src={javaLogo} alt="c++" style={{width: "auto", maxWidth:"100px", maxHeight:"90%",margin:"10px"}} />
            <img src={JSLogo} alt="c++" style={{width: "auto", maxWidth:"100px", maxHeight:"90%",margin:"10px"}} />
        </Box>
        <Box className={styles.outerBox} style={{marginTop:"10px"}}>
            <Box className={styles.innerBox}>
                FrontEnd
            </Box>
            <img src={reactJSLogo} alt="reactJS" style={{width: "auto", maxWidth:"100px", maxHeight:"90%",margin:"10px"}} />
        </Box>
        <Box className={styles.outerBox} style={{marginTop:"10px"}}>
            <Box className={styles.innerBox}>
                BackEnd
            </Box>
            <img src={railsLogo} alt="rails" style={{width: "auto", maxWidth:"100px", maxHeight:"90%",margin:"10px"}} />
        </Box>
        <Box className={styles.outerBox} style={{marginTop:"10px"}}>
            <Box className={styles.innerBox}>
                DataBases
            </Box>
            <img src={postGreSqlLogo} alt="psql" style={{width: "auto", maxWidth:"100px", maxHeight:"90%",margin:"10px"}} />
        </Box>
        </div>
        </Layout>
    );
}