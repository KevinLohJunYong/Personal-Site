import React from 'react';
import Layout from '@theme/Layout';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import codingWallPaper from '../../../static/img/codingWallPaper2.png';
import portfolioWebSite from '../../../static/img/portfolioWebsite.png';

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
              <Card style={{width:"30%",height:"40%",margin:"30px"}}>
              <CardContent>
                      <CardMedia style={{height:"200px"}} image={portfolioWebSite}>
                          
                      </CardMedia>
                  </CardContent>
              </Card>
        </div>
    </Layout>
    );
}