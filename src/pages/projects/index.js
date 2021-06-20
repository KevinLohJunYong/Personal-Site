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
import meetThePathFinderAlgorithms from '../../../static/img/meetThePathFinderAlgorithms.png';
import SortingAlgorithms from '../../../static/img/SortingVisualiser.png';
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
              <div style={{display:"flex",flexDirection:"row"}}>
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
                      <div className={styles.projButton}>
                      <Button size="large" variant="outlined" 
                        href="https://github.com/KevinLohJunYong/Personal-Site" target= "_blank">
                          Github
                     </Button>
                     </div>
                  </CardContent>
              </Card>
              <Card className={styles.card}>
              <CardContent>
                      <CardMedia className={styles.projectImage} image={meetThePathFinderAlgorithms}>
                      </CardMedia>
                      <h1 className={styles.projectHeader}>
                          Path Finder Visualiser
                      </h1>
                      <p style={{textAlign:"center"}}>
                          A path finder visualiser I designed. You can play with it by clicking the highlighted link
                          :D
                          <a href="https://meetthepathfinderalgorithms.netlify.app/" target="_blank"> PathFinderVisualiser  </a>
                      </p>
                      <div className={styles.projButton}>
                      <Button size="large" variant="outlined" 
                        href="https://github.com/KevinLohJunYong/PathFinderVisualiser" target= "_blank">
                          Github
                     </Button>
                     </div>
                  </CardContent>
              </Card>
              <Card className={styles.card}>
              <CardContent>
                      <CardMedia className={styles.projectImage} image={SortingAlgorithms}>
                      </CardMedia>
                      <h1 className={styles.projectHeader}>
                          Sorting Visualiser
                      </h1>
                      <p style={{textAlign:"center"}}>
                          A sorting visualiser I designed. You can play with it by clicking the highlighted link :D
                          <a href="https://ilovesortingalgorithms.netlify.app/" target="_blank"> Sorting Visualiser </a>
                      </p>
                      <div className={styles.projButton}>
                      <Button size="large" variant="outlined" 
                        href="https://github.com/KevinLohJunYong/SortingVisualiser" target= "_blank">
                          Github
                     </Button>
                     </div>
                  </CardContent>
              </Card>
              </div>
              </Roll>
        </div>
    </Layout>
    );
}