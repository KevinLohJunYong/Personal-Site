import React from 'react';
import Layout from '@theme/Layout';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';

export default function Skills() {
    return (
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center">
            <Box color="white" bgcolor="palevioletred" p={1}>
                   Languages
            </Box>
            <Box color="white" bgcolor="palevioletred" p={1}>
                   FrontEnd
            </Box>
            <Box color="white" bgcolor="palevioletred" p={1}>
                   BackEnd
            </Box>
            <Box color="white" bgcolor="palevioletred" p={1}>
                   DataBases
            </Box>
      </Grid>
    );
}