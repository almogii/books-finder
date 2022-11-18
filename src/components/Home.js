import React from 'react';
//import Redirect from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {  useEffect } from "react";


//import { BrowserRouter, Routes, Route } from "react-router-dom"



const Home = ({setName}) => {

 let Navigate=useNavigate()

// const handleClick=(event)=>{
//     setName(event.target.value)
//     localStorage.setItem('userName',JSON.stringify(event.target.value));
  
    
    const handleClick=()=>{
        return Navigate("/search")
    }
    return (
        <div className='home'>
            <form>
            <input  type ='text'
            // value={}
            placeholder='please enter your name'
            onChange={(e)=>{setName(e.target.value)
               }}
            required></input>
            <button className='home-btn' onClick={handleClick} >submit</button>
         </form>
        </div>
      
    
 
       );
}
 
export default Home;
