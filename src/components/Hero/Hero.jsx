import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from "number-counter"
import {motion } from "framer-motion"
const Hero = () => {
  const transition = { type: "spring" , duration : 3}
  const mobile = window.innerWidth <= 768 ? true : false ;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <motion.div
          initial = {{left : mobile ? "140px" : "240px"}}
          whileInView={{left : '8px'}}
          transition={{...transition, type: 'tween'}}
          > 
          </motion.div>
          <span>the best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              quas!
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span><NumberCounter  preFix="+" end={140} start={100} delay={4} /></span>
            <span>expert coaches</span>
          </div>
          <div>
            <span><NumberCounter  preFix="+" end={970} start={900} delay={8} /></span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter  preFix="+" end={50} start={0} delay={2} /></span>
            <span>fitness Programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        {/* <button className="btn">Join Now</button> */}

        <motion.div 
        transition={transition}
        initial={{right : "-1rem"}}
        whileInView={{right : "4rem"}}
        className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 BPM</span>
        </motion.div>
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img 
          transition={transition}
          initial={{right : "10rem"}}
          whileInView={{right : "20rem"}}
        src={hero_image_back} alt="" className="hero-image-back" />

        <motion.div className="calories" 
          transition={transition}
          initial={{right : "20rem"}}
          whileInView={{right : "30rem"}}
          >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
