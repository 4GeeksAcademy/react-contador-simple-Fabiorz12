import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import "@fortawesome/fontawesome-free/css/all.min.css";

// index.css'
import '../styles/index.css'

// components
import SecondsCounter from './components/SecondsCounter';

let counter = 0;

setInterval(() => {
    const five = Math.floor(counter / 10000);
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    counter++;
  
    ReactDOM.createRoot(document.getElementById('root')).render(
      <>
        <SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five}/>
      </>,
    )
}, 1000);