import React,{createContext} from 'react';
import './App.css';
import {BrowserRouter ,Route,Routes,} from 'react-router-dom'
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';
import Testimonal from './components/Testimonal';
import Skils from './components/Skils';

const Name = createContext()

function App() {
  return (
        <>
    <BrowserRouter>
    <Routes>
    <Route path="/skils"
            element={<Skils/>}
            />

    <Route path="/contact"
                element={<Contact/>}
                />

    <Route path="/testimonal"
                element={<Testimonal/>}
                />


    <Route path="/project"
            element={ <Project/>}
            
            />


            

    <Route path="/"
            element= {<Home /> }
            
            />
    </Routes>
                
    </BrowserRouter>
   
    </>
  );
}

export default App;
export {Name}
