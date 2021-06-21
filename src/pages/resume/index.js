import React from 'react';
import Layout from '@theme/Layout';

export default function resume() {
    return (
      <Layout>
        <div style={{backgroundColor:"white"}}> 
            <div>
          <h1>
             Kevin Loh Jun Yong
           </h1>
           </div>
           <div style={{display:"flex",flexDirection:"row"}}>
             <div>
           <h3> Proficient in Java, Javascript, ReactJS, Django and Git </h3>
           <h3> Familiar with C++, Ruby on Rails, PostgreSQL </h3>
           </div>
           <div style={{marginLeft:"15%"}}>
             <h3>
             Mobile Number/WhatsApp: +65 8700 2086
             </h3>
             <h3>
             Email: e0439232@u.nus.edu
             </h3>
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
           <h2> PathFinderVisualiser App </h2>
           <ul>
             <li> 
               <h3> I created a path finder visualiser app using ReactJS, Material-UI, HTML and CSS </h3> 
              </li>
              <li> 
                <h3> It shows the visualisation for the Breath First Search, Depth First Search,
                   Dijskstra, Greedy Best First Search and A* Search algorithms </h3> 
              </li>
              <li> 
               <h3> It allows users to change the start and end nodes, add walls and 
                 see the visualisations of the different path finder algorithms </h3> 
              </li>
              <li>
                <div style={{display:"inline"}}>
                  <h3> You can view this app by clicking the link <a href="https://meetthepathfinderalgorithms.netlify.app/" target="_blank"> 
                     Path Finder Visualiser App </a> 
                   </h3>
                 </div>
              </li>
           </ul>
           <h2> SortingVisualiser App </h2>
           <ul>
             <li> 
               <h3> I created a sorting visualiser app using ReactJS, Material-UI, HTML and CSS </h3> 
              </li>
              <li> 
                <h3> It shows the visualisation for the Bubble Sort, Insertion Sort, Selection Sort,
                   Comb Sort, Merge Sort and Quick Sort algorithms 
                </h3> 
                <h3> You can view this app by clicking the link <a href="https://ilovesortingalgorithms.netlify.app/" target="_blank"> 
                   Sorting Visualiser App </a> 
                </h3>
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
                  answer help others may have </h3> 
              </li>
              <li> 
                <h3> This website also has sign up and login features </h3> 
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
             Hobbies and Personality
           </h1>
           <ul>
           <li>
             <h3> I enjoy doing personal programming projects in my free time </h3>
           </li>
           <li>
            <h3> I also enjoy doing algorithm problems in my free time which I believe helps to improve my computer science fundamentals, problem solving abilities 
             and soft skills like the never-say-die attitude </h3>
           </li>
           <li>
             <h3> I enjoy playing table tennis recreationally in my free time.
                I had represented the Computing Faculty in NUS in table tennis competitions and 
                had played singles and doubles </h3>
           </li>
           <li>
             <h3> Though I would describe myself as an introvert, I still enjoy making new friends and socialising from time to time. 
               I am a cheerful and friendly person who gets along well with most people. </h3>
           </li>
           </ul>
        </div>
      </Layout>
    );
}