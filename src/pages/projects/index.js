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
              <Card className={styles.card}>
              <CardContent>
                      <CardMedia className={styles.projectImage} image={portfolioWebSite}>
                      </CardMedia>
                      <h1 className={styles.projectHeader}>
                          Portfolio Website
                      </h1>
                      <p style={{textAlign:"center"}}>
                          The website you are viewing now! :D
                      </p>
                      <Button style={{marginLeft:getMarginLeftButton()}} size={getSizeButton()} variant="outlined" 
                        href="https://github.com/KevinLohJunYong/Personal-Site" target= "_blank">
                          Github
                     </Button>
                     <div className={styles.chips}>
                     <Chip size={getSizeChips()} label="ReactJS" variant="outlined" style={{margin:"2%"}} />
                     <Chip size={getSizeChips()} label="Material-UI" variant="outlined" style={{margin:"2%"}} />
                     </div>
                  </CardContent>
              </Card>
              </Roll>
        </div>
    </Layout>
    );
}
function getMarginLeftButton() {
  return window.innerWidth <= 400 ? "20%" : "35%"
}
function getSizeButton() {
  return window.innerWidth <= 400 ? "small" : "large"
}
function getSizeChips() {
  return window.innerWidth <= 400 ? "small" : "large"
}