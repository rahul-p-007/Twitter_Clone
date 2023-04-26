import React,{useState} from "react";
import "./Style/Explore.css"
import { Link } from "react-router-dom";
import db from "../../../firebase";
const Explore = () => {
  
  return (
    <>
    <main>
        
        <div id="landing">
            <div id="landing-text">
                <div id="landing-text-inner" >
                    <h1>Explore </h1>
                    <h2>Beatyful Images</h2>
                    <Link to="/" className="btn" id="view-work">
                          Go Back
                    </Link>
                    
                </div>
            </div>
            <div id="landing-image"></div>
        </div>
      
   
        <div id="images">
            <div id="header">
                <h2>Your Stories</h2>
            </div>

            <img src="https://source.unsplash.com/1600x900/?nature,water
" alt="nature image" />
            <div className="caption">
                <h3>Photo One</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, error!</p>
            </div>
            <img src="https://source.unsplash.com/1600x900/?nature,trees
            " alt="nature image"/>
            <div className="caption">
                <h3>Photo Two</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, error!</p>
            </div>
            <img src="https://source.unsplash.com/1600x900/?nature,flowers
            " alt="nature image" />
            <div className="caption">
                <h3>Photo Three</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, error!</p>
            </div>
            <img src="https://source.unsplash.com/1600x900/?nature,animals
            " alt="nature image" />
            <div className="caption">
                <h3>Photo Four</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, error!</p>
            </div>
            <img src="https://source.unsplash.com/1600x900/?nature,clouds
            " alt="nature image" />
            <div className="caption">
                <h3>Photo Five</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, error!</p>
            </div>
        </div>
    </main>

    
</>
  );
};

export default Explore;
