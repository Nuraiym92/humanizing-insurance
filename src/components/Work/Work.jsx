import React from 'react';
import "./work.scss";
import workbg from "../../assets/images/bg-pattern-how-we-work-desktop.svg";

function Work() {
  return (
      <section className='work'>
       <div className='work__bg'>
                 <img src={workbg}/>
             </div>
          <div className='work__inner'>
              <div className='work__txt'>
                  <h2>Find out more about how we work</h2>
              </div>
             <button className='work__btn'><a className='work__btn-link' href="#">How we work</a></button>
             </div>
            
      </section>
  )
  ;

}

export default Work;
