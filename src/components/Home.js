import React from   'react';
import Navbar from './Navbar';
import "./Home.css"



const Home =() => {
    return(
        <div>
            <Navbar />
            
            <div className='content'>
                
                <div className="personal">
                <h1>Personal Info:</h1>
                <span>Name : Jeevan kumar</span>
                <span>DOB : 25-03-1998</span>
                <span>Gender : male</span>
                <span>Nationality : Indian</span>
                <span>languages : English,Telugu,hindi</span>
                <span>Hobbies : playing cricket,sudoku</span>
                </div>
                <div className="educational">
                    <h1>educational details:</h1>
                    <h4>BACHELOR OF TECHNOLOGY</h4>
                    <span>SASI INSTITUTE OF SCIENCE & INFORMATION TECHNOLOGY</span>
                    <span>form JNTU-K</span>
                    <span>Mechanical Engineering Branch</span>
                    <span>aggregate percentage : 7.11 CGPA</span>
                    <span>Academic year : 2018-2021</span>
                    <h4>DIPLOMA</h4>
                    <span>SRI VENKATESWARA INSTT OF SCIENCE & INFORMATION TECHNOLOGY</span>
                    <span>form SBTET andhra pradesh</span>
                    <span>Mechanical Engineering Branch</span>
                    <span>aggregate percentage : 63.20%</span>
                    <span>Academic year : 2015-2018</span>
                    <h4>SECONDARY SCHOOL</h4>
                    <span>SASI EM HIGH SCHOOL</span>
                    <span>form BOAED OF SECONDARY EDUCATION andhra pradesh</span>
                    <span>aggregate percentage : 9.0 CGPA</span>
                    <span>Academic year : 2014-2015</span>
                    
                </div>
            </div>
        </div>
    )
}


export default Home;
