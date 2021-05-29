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
import Typist from "react-typist";
import Fade from 'react-reveal/Fade';
import codingWallPaper from '../../../static/img/codingWallPaper.png';

export default function Skills() {
    return (
        <Layout>
                <div style={{backgroundImage: 'url('+codingWallPaper+')',
          backgroundSize: "cover",
          height: "100%",position:"fixed",width:"100%"}}>
              <Fade left>
        <div style={{marginTop:"10%"}}>
                 <h1 style={{color:"white",textAlign:"center"}}>
                     Languages and Technologies
                  </h1>  
        <Box className={styles.outerBox}>
            <Box className={styles.innerBox}>
                Languages
            </Box>
            <img src={pythonLogo} alt="python" style={{margin:"10px"}}/>
            <img src={cPlusPlusLogo} alt="c++" style={{margin:"10px"}} />
            <img src={javaLogo} alt="c++" style={{margin:"10px"}} />
            <img src={JSLogo} alt="c++" style={{margin:"10px"}} />
        </Box>
        <Box className={styles.outerBox}>
            <Box className={styles.innerBox}>
                FrontEnd
            </Box>
            <img src={reactJSLogo} alt="reactJS" style={{width: "auto", maxWidth:"100px", maxHeight:"90%",margin:"10px"}} />
        </Box>
        <Box className={styles.outerBox} style={{marginTop:"10px"}}>
            <Box className={styles.innerBox}>
                BackEnd
            </Box>
            <img src={railsLogo} alt="rails" style={{width: "auto", maxHeight:"90%",margin:"10px"}} />
        </Box>
        <Box className={styles.outerBox} style={{marginTop:"10px"}}>
            <Box className={styles.innerBox}>
                DataBases
            </Box>
            <img src={postGreSqlLogo} alt="psql" style={{width: "auto", maxWidth:"100px", maxHeight:"90%",margin:"10px"}} />
        </Box>
        </div>
        </Fade>
        </div>
        </Layout>
    );
}