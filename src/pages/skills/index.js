import React from 'react';
import Layout from '@theme/Layout';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import styles from '../styles.module.css';
import { Divider } from "@react-md/divider";

export default function Skills() {
    return (
        <div style={{marginLeft: '300px', marginTop: '250px', width: '50%' }}>
            <h1 className={styles.words} style={{marginTop:'-60px',marginLeft:'300px'}}>
                Skills
            </h1>
            <Box style={{'borderRadius':'20px'}} color="white" bgcolor="yellow" fontSize="larger">
                   <Box p={2} style={{'borderRadius':'20px 0px 0px 20px'}} bgcolor="blue" width="50%">
                      Languages
                   </Box>
            </Box>
            <Box style={{'borderRadius':'20px',marginTop:'10px'}} color="white" bgcolor="yellow" fontSize="larger">
                   <Box p={2} style={{'borderRadius':'20px 0px 0px 20px'}} bgcolor="blue" width="50%">
                      FrontEnd
                   </Box>
            </Box>
            <Box style={{'borderRadius':'20px',marginTop:'10px'}} color="white" bgcolor="yellow" fontSize="larger">
                   <Box p={2} style={{'borderRadius':'20px 0px 0px 20px'}} bgcolor="blue" width="50%">
                      BackEnd
                   </Box>
            </Box>
            <Box style={{'borderRadius':'20px',marginTop:'10px'}} color="white" bgcolor="yellow" fontSize="larger">
                   <Box p={2} style={{'borderRadius':'20px 0px 0px 20px'}} bgcolor="blue" width="50%">
                      DataBase
                   </Box>
            </Box>
      </div>
    );
}