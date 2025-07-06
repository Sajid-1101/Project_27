import React from "react";
import employee from '../../assets/work_logo/emp-manager-management.png';
import rps from '../../assets/work_logo/rps.png';
import tictactoe from '../../assets/work_logo/tictactoe.png';
import weather from '../../assets/work_logo/weather.png';
const Work = () => {
  return (
    <div id="Work" className="scroll-smooth scroll-mt-20 flex flex-col flex-wrap items-center mb-16">
      <h1 className="text-center text-white font-bold text-3xl">Projects</h1>
      <div className="w-28 h-1 bg-purple-700 mx-auto"></div>
      <p className="text-gray-300/50 font-semibold text-center p-4 mb-4">
        A showcase of my projects I have worked on, highlighting my skills and
        experience in various technology
      </p>
      <div className="flex flex-col flex-wrap items-center gap-4">
        <div className="flex flex-wrap  justify-center gap-4">
          <div className="md:w-[32rem] sm:mx-32 md:mx-0 bg-gradient-to-t from-gray-900 to-black p-4  rounded-2xl border-2 border-purple-700 text-white h-full hover:bg-transparent shadow-2xl shadow-purple-500/30">
            <a href="https://emp-manager-management.netlify.app/" 
             target="_blank" rel="noopener noreferrer">
              <img
              src={employee}
              alt=""
              className=" border border-white rounded-lg object-cover w-full h-[15rem] shadow-2xl hover:shadow-purple-500/50"
            />
            </a>
            <h3 className="font-semibold p-2">Employee_Manager_Management : <a href="https://emp-manager-management.netlify.app/" 
             target="_blank" rel="noopener noreferrer"
            className="text-purple-500 text-shadow-lg hover:text-blue-500 hover:text-shadow-blue-500/20">See Live</a></h3>
            
            <p className="p-2 text-gray-300">
              <span className="text-white font-medium">Description :</span> <br/> Description:
                A web-based platform for managing company employees. It includes features like user authentication, role-based dashboards, and employee data management. <br />
                Admin Login: admin@company.com / 123 <br/>
                Employee (Sam) Login: e@c.com / 123
            </p>
            <p className="p-2 text-gray-300">
              <span className="text-white font-medium">Tech Stack :</span> <br/> ReactJS, TailwindCSS
            </p>
            <p className="p-2 text-gray-300">
              <span className="font-medium text-white">Learning Outcomes :</span> <br/> Built a role-based Employee Management System using React.js.
<br/>
Implemented Admin and Employee login with conditional rendering. <br/>

Used React hooks for state and lifecycle management.
<br/>
Handled forms and basic validation in React.
<br/>
Designed UI responsive for sm, md, and lg screens using CSS.
<br/>
Deployed the app on Netlify for live access.


            </p>
          </div>
          <div className="md:w-[32rem] sm:mx-32 md:mx-0 bg-gradient-to-t from-gray-900 to-black p-4  rounded-2xl border-2 border-purple-700 text-white h-full hover:bg-transparent shadow-2xl shadow-purple-500/30 flex flex-col items-stretch">
            <a href="https://tictac-t-o-e-game.netlify.app/" 
             target="_blank" rel="noopener noreferrer">
              <img
              src={tictactoe}
              alt=""
              className=" border border-white rounded-lg object-cover w-full h-[15rem] shadow-2xl hover:shadow-purple-500/50"
            />
            </a>
            <h3 className="font-semibold p-2">TicTacToe-TwoPlayer-Game : <a href="https://tictac-t-o-e-game.netlify.app/" 
             target="_blank" rel="noopener noreferrer"
             className="text-purple-500 text-shadow-lg hover:text-blue-500 hover:text-shadow-blue-500/20">See Live</a></h3>
            
            <p className="p-2 text-gray-300">
              <span className="text-white font-medium">Description :</span> <br/> Description:
                A two-player Tic Tac Toe game where players take turns marking X or O on a 3x3 grid, aiming to align three symbols in a row, column, or diagonal. Includes win/draw detection and reset functionality.
            </p>
            <p className="p-2 text-gray-300">
              <span className="text-white font-medium">Tech Stack :</span> <br/> HTML, CSS, JavaScript
            </p>
            <p className="p-2 text-gray-300">
              <span className="font-medium text-white">Learning Outcomes :</span> <br/> Built a fully functional Tic Tac Toe game using HTML, CSS, and JavaScript. <br/>

Gained understanding of game logic, event handling, and DOM manipulation.
<br/>
Implemented turn-based gameplay with win/tie detection.
<br/>
Practiced modular code structure and basic debugging.
<br/>
Deployed the project on Netlify for public access
            </p> 
            <br/>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="md:w-[32rem] md:mx-0 sm:mx-32 bg-gradient-to-t from-gray-900 to-black p-4  rounded-2xl border-2 border-purple-700 text-white h-full hover:bg-transparent shadow-2xl shadow-purple-500/30">
            <a href="https://rps-java-game.netlify.app/"
            target="_blank" rel="noopener noreferrer">
              <img
              src={rps}
              alt=""
              className=" border border-white rounded-lg object-cover w-full h-[15rem] shadow-2xl hover:shadow-purple-500/50"
            />
            </a>
            <h3 className="font-semibold p-2">RockPaperScissor-1Player-Game : <a href="https://rps-java-game.netlify.app/"
            target="_blank" rel="noopener noreferrer" className="text-purple-500 text-shadow-lg hover:text-blue-500 hover:text-shadow-blue-500/20">See Live</a></h3>
            
            <p className="p-2 text-gray-300">
              <span className="text-white font-medium">Description :</span> <br/>A simple and interactive web game built using HTML, CSS, and JavaScript. Users play against the computer by choosing rock, paper, or scissors. The game includes real-time score tracking and displays the result after each round.
            </p>
            <p className="p-2 text-gray-300">
              <span className="text-white font-medium">Tech Stack :</span> <br/> HTML, CSS, JavaScript
            </p>
            <p className="p-2 text-gray-300">
              <span className="font-medium text-white">Learning Outcomes :</span> <br/>Gained hands-on experience with JavaScript fundamentals and user interaction.
<br/>
Implemented game logic, random choice generation, and score management.
<br/>
Practiced DOM manipulation for real-time updates and result display.
<br/>
Improved CSS styling skills to create an engaging UI.
<br/>
Deployed the game on Netlify to make it publicly accessible.
            </p>
          </div>
          <div className="md:w-[32rem] md:mx-0 sm:mx-32 bg-gradient-to-t from-gray-900 to-black p-4  rounded-2xl border-2 border-purple-700 text-white h-full hover:bg-transparent shadow-2xl shadow-purple-500/30">
            <a href="https://weather-mui.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img
              src={weather}
              alt=""
              className=" border border-white rounded-lg object-cover w-full h-[15rem] shadow-2xl hover:shadow-purple-500/50"
            />
            </a>
            <h3 className="font-semibold p-2">Project01 : <a href="https://weather-mui.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-purple-500 text-shadow-lg hover:text-blue-500 hover:text-shadow-blue-500/20">See Live</a></h3>
            
            <p className="p-2 text-gray-300">
              <span className="text-white font-medium">Description :</span> <br/> A sleek and responsive weather application built using React and Material-UI (MUI). It allows users to search for any city and view real-time weather details including temperature, humidity, and weather conditions.
            </p>
            <p className="p-2 text-gray-300">
              <span className="text-white font-medium">Tech Stack :</span> <br/> ReactJS, Material-UI (MUI), OpenWeatherMap API 
            </p>
            <p className="p-2 text-gray-300">
              <span className="font-medium text-white">Learning Outcomes :</span> <br/> Gained practical experience with React.js for building a dynamic single-page application.
<br/>
Learned to use Material-UI (MUI) for creating responsive and modern UI components.
<br/>
Implemented API integration using Axios to fetch live weather data from OpenWeatherMap.
<br/>
Deployed the app on Netlify, understanding the basics of frontend deployment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
