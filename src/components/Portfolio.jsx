import React from "react";
import calc from "../assets/calc.png";
import guess from "../assets/guess.png";
import food from "../assets/food.png";
import dice from "../assets/dice.png";
import timer from "../assets/timer.png";
import ttt from "../assets/ttt.png";

const Portfolio = () => {
  const portfolios = 
[
  {
    id:1,
    src:calc,
    link:"https://github.com/Khushi1451828/calculator"
  },
  {
    id:2,
    src:guess,
    link:"https://github.com/Khushi1451828/guess-number"
  },
  {
    id:3,
    src:food
  },
  {
    id:4,
    src:dice,
    link:"https://github.com/Khushi1451828/DiceGame"
  },
  {
    id:5,
    src:timer,
    link:"https://github.com/Khushi1451828/CountDown"
  },
  {
    id:6,
    src:ttt,
    link:"https://github.com/Khushi1451828/Tic-Tac-Toe"
  },
]
  
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8  mt-80">
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>


        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

        {
          portfolios.map(({id,src,link})=>(
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
         <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
          <div className="flex items-center justify-center">
            
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={link} target="_blank">Code</a></button>
          </div>
         </div>
          ))
        }
         
          
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
