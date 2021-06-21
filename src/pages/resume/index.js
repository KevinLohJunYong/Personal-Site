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
           </ul>
           <h1 style={{color:"#00bfff"}}> 
             Side Projects
           </h1>
           <h2> PathFinderVisualiser App (Link: <a href="https://meetthepathfinderalgorithms.netlify.app/" target="_blank"> 
                     Path Finder Visualiser App </a>) </h2>
           <ul>
              <li> 
               <h3> It allows users to play with the positions of the start and end nodes, add walls and 
                 see the cool animation for the different path finder algorithms </h3> 
              </li>
           </ul>
           <h2> SortingVisualiser App (Link: <a href="https://ilovesortingalgorithms.netlify.app/" target="_blank"> 
                   Sorting Visualiser App </a>) </h2>
           <ul>
             <li> 
               <h3> It shows cool animations for different sorting algorithms </h3> 
              </li>
           </ul>
           <h2> Help Desk </h2>
           <ul>
             <li> 
               <h3> I decided to do a minor project for fun while learning the Django Framework and 
                 Bootstrap </h3> 
              </li>
              <li> 
                <h3> This website allows users to ask for help about anything and 
                  answer help others may have. It also has sign up and login features. </h3> 
              </li>
              <li>
                <h3> You can view this app on localhost:3000 by doing git clone
                https://github.com/KevinLohJunYong/HelpDesk.git, cd HelpDesk and finally running yarn start
                </h3>
              </li>
           </ul>
           <h2> Portfolio Website </h2>
           <ul>
             <li> 
               <h3> I created a Portfolio Website using ReactJS, Material-UI, HTML and CSS </h3> 
              </li>
              <li> 
                <h3> This is the website you are viewing now </h3> 
              </li>
           </ul>
           <h1 style={{color:"#00bfff"}}> 
             Technical Proficiency
           </h1>
           <ul>
             <li> <h3> Proficient in Java, Javacript, Python, ReactJS, Django, Git, Linux and Vim </h3> </li>
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
            <h3> Furthermore, I enjoy doing algorithm problems in my free time which I believe helps to improve my computer science fundamentals, problem solving abilities 
             and soft skills like the never-say-die attitude </h3>
           </li>
           <li>
             <h3> Moreover, I plays table tennis mainly recreationally and 
                 represented the Computing Faculty in NUS in table tennis competitions in both singles and doubles </h3>
           </li>
           <li>
             <h3> Additionally, I am a friendly, cheerful and sociable person </h3>
           </li>
           </ul>
        </div>
      </Layout>
    );
}