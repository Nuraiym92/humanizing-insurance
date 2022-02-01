import React from 'react';
import Header from '../Header/Header';
import Hero from "../Hero/Hero";
import Adverd from '../Adverd/Adverd';
import Cards from '../Cards/Cards';
import Work from "../Work/Work";
import Footer from '../Footer/Footer';


function Home() {
  const cards = [
    {
      imgUrl:"./assets/icon-snappy-process.svg",
      title: "Snappy process",
      description:
        "Our application process can be completed in muintes,not hours.Don't get stuck filling tendois forms"
    },
    {
      imgUrl: "./assets/icon-affordable-prices.svg",
      title: "Affordable prices",
      description:
        "Our application process can be completed in muintes,not hours.Don't get stuck filling tendois forms"
    },
    {
      imgUrl: "./assets/icon-people-first.svg",
      title: "People first",
      description:
        "We don't want you to worry about monthly high price.Our prices can be low, but we still offer the best coverage possible"
    }
  ];
 
  
  return (
    <div>
      <Header />
      <Hero/>
      <Adverd/>
      <div className="adverd__items">
        {cards.map((card, idx) => {
          return (
            <Cards 
             cardImg={card.imgUrl}
              cardTitle={card.title}
              cardDescription={card.description}
              key={idx}
              
            />
          );
        })}
      </div>
      <Work/>
      <Footer/>
    
 </div>
  );
      }

export default Home;
