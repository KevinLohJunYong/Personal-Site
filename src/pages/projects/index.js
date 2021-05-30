import React from 'react';
import Layout from '@theme/Layout';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import codingWallPaper from '../../../static/img/codingWallPaper2.png';
import portfolioWebSite from '../../../static/img/portfolioWebSite.png';
import styles from '../styles.module.css';
import Roll from 'react-reveal/Roll';

export default function Projects() {
    return (
      <Layout>
          <div style={{
            backgroundImage: 'url('+codingWallPaper+')',
            backgroundSize: "cover",
            height: "100%",
            position: "fixed",
            width: "100%"
          }}>
            <Roll>
              <Card style={{width:"30%",margin:"3%"}}>
              <CardContent>
                      <CardMedia style={{height:"30vh"}} image={portfolioWebSite}>
                      </CardMedia>
                      <h1 className={styles.projectHeader}>
                          Portfolio Website
                      </h1>
                      <p style={{textAlign:"center"}}>
                          The website you are viewing now! :D
                      </p>
                      <Button style={{marginLeft:"35%"}} size="large" variant="outlined" 
                        href="https://github.com/KevinLohJunYong/Personal-Site" target= "_blank">
                          Github
                     </Button>
                     <div style={{display:"flex",marginTop:"6%",marginLeft:"25%"}}>
                     <Chip size="large" label="ReactJS" variant="outlined" style={{margin:"2%"}} />
                     <Chip size="large" label="Material-UI" variant="outlined" style={{margin:"2%"}} />
                     </div>
                  </CardContent>
              </Card>
              </Roll>
        </div>
    </Layout>
    );
}