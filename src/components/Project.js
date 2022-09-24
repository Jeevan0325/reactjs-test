import React from   'react';
import Navbar from './Navbar';
import "./Projects.css"
import {Name} from '../App';


const Project = () => {
    return(
        <div>
            <Navbar />
            <div className="project">
                <Name.Consumer>
                    {(name) => {
                        return <h1>{name}</h1>
                    }}
                </Name.Consumer>
            <h1>Projects:</h1>
            <div className="amazon">
            <h4><li>Amazon clone</li></h4>
            <div>
            <img src="https://user-images.githubusercontent.com/22294355/89740614-32bbe600-da82-11ea-9473-7e625c75a72b.png" alt="" />
            <img src="https://user-images.githubusercontent.com/67522406/106353332-c1ae0a80-630f-11eb-8b0b-c1bd39758320.png" alt="" />
            </div>
            <span>This is a clone of popular e-commmerce website Amazon. I have created it with React in frontend, Node and Express for backend and MongoDB for storing data.🛒🛒This is a Amazon Shopping Site's clone version created using ReactJs. Here we can able to add your items to the cart and also able to purchase the products using your card via stripe payment method</span>
            </div>
            <div className="instagram">
            <h4><li>instagram clone</li></h4>
            <div>
            <img src="https://repository-images.githubusercontent.com/387253753/2bdc4e2c-1515-4510-ad0d-74fee36490ba" alt="" />
            <img src="https://raw.githubusercontent.com/laisfrigerio/instagram-clone-login-page/master/screenshots/desktop.png" alt="" />
            <img src="https://i.ytimg.com/vi/Ssw70m1RyXQ/maxresdefault.jpg" alt="" />
            </div>
            <span>In this series, we'll use all of them and you'll learn them by doing an iconic app. Welcome to this Simcoder project and make an Instagram Clone!Instagram Clone React Native Tutorial 2021 👨‍💻 I'll show you how you can do this in the simplest way and terms possible. By the end of this series you'll have learned how the big companies do it and will be able to do the same, you not only will be able to do this app, but you'll be able to put what you learn into your very own projects! In this series, we use React Native with Expo to quickly deploy the project. We use firebase for all our microservice needs like the auth system, database, storage, amongst others. firebase, redux, react native, javascript, expo. In this series, we'll use all of them and you'll learn them by doing an iconic app. Welcome to this Simcoder project and make an Instagram Clone!</span>
            </div>
            </div>
        </div>
    )
}
export default Project;