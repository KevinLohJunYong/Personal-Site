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
            height: "100vh",
            position: "fixed",
            width: "100%"
          }}>
            <Roll>
              <Card style={{width:"30%",height:"60%",margin:"30px"}}>
              <CardContent>
                      <CardMedia style={{height:"200px"}} image={portfolioWebSite}>
                      </CardMedia>
                      <h1 style={{textAlign:"center",marginTop:"10px"}}>
                          Portfolio Website
                      </h1>
                      <p style={{textAlign:"center"}}>
                          The website you are viewing now! :D
                      </p>
                      <Button style={{marginLeft:"150px"}} size="large" variant="outlined" 
                        href="https://github.com/KevinLohJunYong/Personal-Site" target= "_blank">
                          Github
                     </Button>
                     <div style={{display:"flex",marginLeft:"40px",marginTop:"10px"}}>
                     <Chip size="medium" label="ReactJS" variant="outlined" style={{margin:"10px"}} />
                     <Chip size="medium" label="Docusaurus" variant="outlined" style={{margin:"10px"}} />
                     <Chip size="medium" label="Material-UI" variant="outlined" style={{margin:"10px"}} />
                     </div>
                  </CardContent>
              </Card>
              </Roll>
        </div>
    </Layout>
    );
}