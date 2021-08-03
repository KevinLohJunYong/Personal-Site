import React from 'react';
import Layout from '@theme/Layout';

export default function resume() {
    return (
      <Layout>
        <div style={{backgroundColor:"white"}}>
          <div style={{marginLeft:"4%"}}>
            <div style={{display:"flex",flexDirection:"row"}}>
          <h1 style={{marginTop:"4%"}}>
             Kevin Loh Jun Yong
           </h1>
           <div style={{marginLeft:"5%",marginTop:"4%"}}>
           <h3>
             Mobile Number/WhatsApp: +65 8700 2086
             </h3>
             <h3>
             Email: e0439232@u.nus.edu
             </h3>
             </div>
           </div>
           <div>
           <div>
           </div>
           </div>
           <h1 style={{color:"#00bfff",marginTop:"4%"}}> 
             Education
           </h1>
           <h2 style={{marginTop:"2%"}}> National University of Singapore - AUG 2019 - MAY 2023 </h2>
           <ul>
             <li> <h3> Bachelor of Computing in Computer Science (Honours) </h3> </li>
             <li> <h3> Incoming 3rd year undergraduate, specialising in Software Engineering and Algorithms </h3></li>
             <li> <h3> Admitted with 3H2 distinctions and B for General Paper ( IGP: AAA/B ) at the Singapore-Cambridge GCE A-Level Examination </h3> </li>
           </ul>
           <h1 style={{color:"#00bfff",marginTop:"4%"}}> 
             Side Projects
           </h1>
           <h2 style={{marginTop:"2%"}}> PathFinderVisualiser App (Link: <a href="https://meetthepathfinderalgorithms.netlify.app/" target="_blank"> 
                     Path Finder Visualiser App </a>) </h2>
           <ul>
              <li> 
               <h3> It allows users to see cool animations for different path finder algorithms </h3> 
              </li>
           </ul>
           <h2 style={{marginTop:"2%"}}> SortingVisualiser App (Link: <a href="https://ilovesortingalgorithms.netlify.app/" target="_blank"> 
                   Sorting Visualiser App </a>) </h2>
           <ul>
             <li> 
               <h3> It allows users to see cool animations for different sorting algorithms </h3> 
              </li>
           </ul>
           <h2 style={{marginTop:"2%"}}> Portfolio Website </h2>
           <ul>
              <li> 
                <h3> This is the website you are viewing now </h3> 
              </li>
           </ul>
           <h1 style={{color:"#00bfff",marginTop:"4%"}}> 
             Technical Proficiency
           </h1>
           <ul>
             <li> <h3> Relevant modules taken: Programming Methodology I & II, Data Structures And Algorithms, Software Engineering, Computer Organisation, Database Systems and Discrete Structures </h3></li>
             <li> <h3> Proficient in BootStrap, Java, Javascript, Python, ReactJS, Django, Git, Linux and Vim </h3> </li>
             <li> <h3> Familiar with C++, PostgreSQL, Ruby On Rails and MATLAB </h3> </li>
           </ul>
           <h1 style={{color:"#00bfff",marginTop:"4%"}}> 
              Hobbies
           </h1>
           <ul>
             <li> <h3> Enjoys doing software engineering projects. 
               There are other projects I did, which includes a snake game and a QA website </h3> </li>
               <li> <h3> Enjoys solving algorithm problems </h3></li>
             <li> <h3> Represented NUS Computing in Inter-Faculty Games in table tennis </h3></li>
           </ul>
        </div>
        </div>
      </Layout>
    );
}