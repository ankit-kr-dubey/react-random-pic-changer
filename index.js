import React  from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.js"
import Bpp from "./Bpp.js"
import Cpp from "./Cpp.js"
import Dpp from "./Dpp.js"
import Epp from "./Epp.js"
import Fpp from "./Fpp.js"
import Gpp from "./Gpp.js"
import Hpp from "./Hpp.js"


import './index.css';
const nameMonth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let hours = new Date();
hours = hours.getHours()
let month= new Date()
month=nameMonth[month.getMonth()]
let date =new Date()
date = date.getDate()
let greeting = "";

if(hours>= 0&& hours< 12){
  greeting = "Good Morning ";
}
else if (hours>= 12 && hours < 19){
  greeting = "Good Afternoon";
}
else{
  greeting = "Good Night"
}


// -for photo flip----------


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
   <div id ="container">
  
  <h1>Hello Everyone {greeting} . Today Its , {date} Of {month} </h1>
  <div id="flex">
    <App/>
    <Bpp/>
    <Cpp/>
    <Dpp/>
    <Epp/>
    <Fpp/>
    <Gpp/>
    <Hpp/>
  
 
  </div>
  </div>
  
);


