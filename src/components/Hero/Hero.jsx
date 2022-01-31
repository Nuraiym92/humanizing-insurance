import React from 'react';
import "./hero.scss";
import bg from "../../../src/assets/images/image-intro-desktop.jpg";
import bgright from "../../../src/assets/images/bg-pattern-intro-right-desktop.svg";
import bgleft from "../../../src/assets/images/bg-pattern-intro-left-desktop.svg";
function Hero() {
  return (
  <section className='hero'>
     <div className="hero__inner">
     <div class="hero__txt">
          <h1 className="hero__title">Humanizing your insurance.</h1>
          <p className='hero__descr'>
              Get you life and health insurance faster and easier.
              We blend our expertise and technology to help you to find plan that right for you.
              Ensure you and you loved ones are protected.
          </p>
          <button class="hero__btn"><a class="hero__btn-link" href="#">View plans</a></button>
     </div>
       <div className='hero__bg'>
           <img className="hero__bg" src={bg} />
           </div>
    <div className="hero__bgright">
            <img src={bgright}/>
    </div>
    <div className="hero__bgleft">
            <img src={bgleft}/>
    </div>

     </div>
  </section>
  );
}

export default Hero;
