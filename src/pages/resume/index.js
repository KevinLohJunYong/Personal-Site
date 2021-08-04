import React from 'react';
import Layout from '@theme/Layout';

export default function resume() {
    return (
      <div style={{backgroundColor:"white"}}>
      <Layout>
        <div style={{backgroundColor:"white"}}>
          <div style={{marginLeft:"4%"}}>
            <div style={{display:"flex",flexDirection:"row"}}>
          <h2 style={{marginTop:"0.5%"}}>
             Kevin Loh Jun Yong
             <div style={{marginTop:"1%"}}>
               <h4> Coding enthusiast | Problem-solving </h4> 
               <h4 style={{marginTop:"-3%"}}> enthusiast | Striving to make a difference </h4>
             </div>
           </h2>
           <div style={{marginLeft:"5%",marginTop:"0.5%"}}>
             <h4> 
               Mobile Number/WhatsApp: +65 8700 2086
             </h4>
             <h4>
             Email: <a href="mailto:kevinljy@comp.nus.edu" target="_blank">  kevinljy@comp.nus.edu </a>
             </h4>
             </div>
           </div>
           <div>
           <div>
           </div>
           </div>
           <h3 style={{color:"#00bfff",marginTop:"-2.5%"}}>  
             Education
           </h3>
           <h3 style={{marginTop:"-1%"}}> National University of Singapore - AUG 2019 - MAY 2023 </h3>
           <ul>
             <li> <h4 style={{marginTop:"-1%"}}>  Bachelor of Computing in Computer Science (Honours) </h4> </li>
             <li> <h4 style={{marginTop:"-1%"}}>  3rd year undergraduate, specialising in Software Engineering and Algorithms </h4></li>
             <li> <h4 style={{marginTop:"-1%"}}>  Admitted with 3 H2 distinctions at the Singapore-Cambridge GCE A-Level Examination </h4> </li>
           </ul>
           <h3 style={{color:"#00bfff",marginTop:"-1%"}}> 
             Side Projects
           </h3>
           <h3 style={{marginTop:"-1%"}}> PathFinderVisualiser App (Link: <a href="https://meetthepathfinderalgorithms.netlify.app/" target="_blank"> 
                     Path Finder Visualiser App </a>) </h3>
           <ul>
              <li> 
              <h4 style={{marginTop:"-1%"}}>  It allows users to see animations for different path finder algorithms </h4> 
             <li> <h4 style={{marginTop:"-1%"}}>  It is a visualiser of 5 different algorithms like the Breath First Search, Depth First Search and A* Search </h4> </li>
             <li> <h4 style={{marginTop:"-1%"}}> Users can add "walls", customise the position of the start and end nodes and try out the different algorithms. </h4></li>
              </li>
           </ul>
           <h3> SortingVisualiser App (Link: <a href="https://ilovesortingalgorithms.netlify.app/" target="_blank"> 
                   Sorting Visualiser App </a>) </h3>
           <ul>
             <li> 
             <h4 style={{marginTop:"-1%"}}>  It allows users to see cool animations for different sorting algorithms </h4> 
               <li> <h4 style={{marginTop:"-1%"}}>  It is a visualiser of 6 different algorithms like Merge Sort, Quick Sort and Comb Sort </h4> </li>
              </li>
           </ul>
           <h3> Portfolio Website (Link: <a href="https://kevinlohjunyong.netlify.app/" target="_blank"> 
                   Portfolio Website </a>)  </h3>
           <ul>
              <li> 
              <h4 style={{marginTop:"-1%"}}> I built a portfolio website to show my skills, projects and resume </h4> 
              </li>
              <li>
                <h4 style={{marginTop:"-1%"}}> I included in different animations like the typing and fading animation to make the website look more fascinating </h4>
              </li>
           </ul>
           <h3 style={{color:"#00bfff",marginTop:"-1%"}}>  
             Technical Proficiency
           </h3>
           <ul>
             <li> <h4 style={{marginTop:"-1%"}}> Relevant modules taken: Programming Methodology I & II, Data Structures And Algorithms, Software Engineering, Discrete Structures and more </h4></li>
             <li> <h4 style={{marginTop:"-1%"}}>  Proficient in BootStrap, Java, Javascript, Python, ReactJS, Django, Git, Linux and Vim. Familiar with C++, PostgreSQL, Ruby On Rails and MATLAB </h4> </li>
           </ul>
           <h3 style={{color:"#00bfff",marginTop:"-1%"}}>  
              Interests
           </h3>
           <ul>
             <li> <h4 style={{marginTop:"-1%"}}> Enjoys doing software engineering projects. 
               There are other projects I did, which includes a snake game and a Q&A website </h4> </li>
               <li> <h4 style={{marginTop:"-1%"}}> Volunteered in Jamie Hilario Integrated School in Manila, Philippines in a school trip </h4></li>
             <li> <h4 style={{marginTop:"-1%"}}> Represented NUS Computing in Inter-Faculty Games in table tennis </h4></li>
           </ul>
        </div>
        </div>
      </Layout>
      </div>
    );
}