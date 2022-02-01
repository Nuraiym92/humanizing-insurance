import React from 'react';
import "./adverd.scss"
import Cards from '../Cards/Cards';

function Adverd() {
  return (
      <section className='adverd'>
        <div className='adverd__inner'>
            <div className='adverd__txt'>
                <h2>We're different</h2>
            </div>
            <div className='adverd__items'>
                <Cards/>
            </div>
        </div>
      </section>
  );
}

export default Adverd;
