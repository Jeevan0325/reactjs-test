import React from   'react';
import Navbar from './Navbar';
import { BsFillTelephoneFill ,BsGlobe2} from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import './Contact.css';


const Contact = () => {
    return(
        <div>
            <Navbar />
            <div className="contact">
            <h1>contact:</h1>
            <h2><BsFillTelephoneFill/>  9381505595</h2>
            <h2><GrMail/> g1.gantasala@gmail.com</h2>
            <h2><MdLocationPin/> 1-62,ramalayam street, padala,TPG,WGD,AP,India</h2>
            <h2><BsGlobe2/> g1.gantasala@gmail.com</h2>
            </div>
        </div>
    )
}
export default Contact;