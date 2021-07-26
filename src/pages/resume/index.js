import React from 'react';
import Layout from '@theme/Layout';

export default function resume() {
    return (
      <Layout>
        <div style={{backgroundColor:"white"}}> 
            <div style={{display:"flex",flexDirection:"row"}}>
          <h1>
             Kevin Loh Jun Yong
           </h1>
           <div style={{marginLeft:"5%"}}>
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
           <h1 style={{color:"#00bfff"}}> 
             Education
           </h1>
           <h2> National University of Singapore - AUG 2019 - MAY 2023 </h2>
           <ul>
             <li> <h3> Bachelor of Computing in Computer Science (Honours) </h3> </li>
             <li> <h3> Admitted with 3H2 distinctions and B for General Paper ( IGP: AAA/B ) at the Singapore-Cambridge GCE A-Level Examination </h3> </li>
           </ul>
           <h1 style={{color:"#00bfff"}}> 
             Side Projects
           </h1>
           <h2> PathFinderVisualiser App (Link: <a href="https://meetthepathfinderalgorithms.netlify.app/" target="_blank"> 
                     Path Finder Visualiser App </a>) </h2>
           <ul>
              <li> 
               <h3> It allows users to see cool animations for different path finder algorithms </h3> 
              </li>
           </ul>
           <h2> SortingVisualiser App (Link: <a href="https://ilovesortingalgorithms.netlify.app/" target="_blank"> 
                   Sorting Visualiser App </a>) </h2>
           <ul>
             <li> 
               <h3> It allows users to see cool animations for different sorting algorithms </h3> 
              </li>
           </ul>
           <h2> Minor side projects </h2>
           <ul>
             <li>
               <h3>
                 Snake Game ( Link: <a href="https://funsnakegame.netlify.app/"> Snake Game </a>) is a game where the snake grows upon eating food but it dies when it hits the walls or eats itself.
               </h3>
             </li>
              <li> 
                <h3> Help Desk ( Link: <a href="https://github.com/KevinLohJunYong/HelpDesk.git"> Help Desk </a>) allows users to ask for help about anything and 
                  answer help others may have. 
                </h3> 
              </li>
           </ul>
           <h2> Portfolio Website </h2>
           <ul>
              <li> 
                <h3> This is the website you are viewing now </h3> 
              </li>
           </ul>
           <h1 style={{color:"#00bfff"}}> 
             Technical Proficiency
           </h1>
           <ul>
             <li> <h3> Proficient in BootStrap, Java, Javacript, Python, ReactJS, Django, Git, Linux and Vim </h3> </li>
             <li> <h3> Familiar with C++, PostGreSQL and Ruby On Rails </h3> </li>
           </ul>
           <h1 style={{color:"#00bfff"}}> 
             Hobbies and Personality
           </h1>
           <ul>
           <li>
             <h3> I enjoy doing personal programming projects in my free time </h3>
           </li>
           <li>
            <h3>
               I love problem-solving and enjoys doing algorithm problems in my free time
             </h3>
           </li>
           <li>
             <h3> I am a sporty person who plays table tennis mainly recreationally and also
                 represented the Computing Faculty in NUS in table tennis competitions </h3>
           </li>
           <li>
             <h3> I am a friendly, cheerful and sociable person </h3>
           </li>
           </ul>
        </div>
      </Layout>
    );
}