import React from   'react';
import Navbar from './Navbar';
import './Skils.css'



const Skils = () => {
    return(
        <div>
            <Navbar />
            <div className="skils">
                <h1>skills:</h1>
                <h2><li>HTML</li></h2>
                <h2><li>CSS</li></h2>
                <h2><li>Javascript</li></h2>
                <h2><li>react</li></h2>
                <h2><li>Problem-Solving</li></h2>
                <h2><li>Front End Coding</li></h2>
            </div>
        </div>
    )
}
export default Skils;