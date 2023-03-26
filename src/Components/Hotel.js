import React, { useState } from 'react'
import { Header } from './Header'
import { NavBar } from './NavBar'
import "./hotel.css";
import { MailList } from './MailList';
import { Footer } from './Footer';
export const Hotel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [slidNumber,setSlideNumber]=useState(0)

  const handler = (i) => {
    setIsOpen(true);
    setSlideNumber(i);
  }
  const Photos = [
    {
    src:"../images/photos.jpg"
    },
    {
    src:"../images/photos2.jpg"
    },
    {
    src:"../images/photos3.jpg"
    },
    {
    src:"../images/photos4.jpg"
    },
    {
    src:"../images/photos5.jpg"
    },
    {
    src:"../images/photos6.jpg"
    },
  ]
  const moveHandler = (direction) => {
    let newSliderNumber;
    if (direction === "l") {
      newSliderNumber = slidNumber === 0 ? 5 : slidNumber -1;
    } else {      
      newSliderNumber = slidNumber === 5 ? 0 : slidNumber + 1;
    }
    setSlideNumber(newSliderNumber)
  }
  return (
    <div>
      <NavBar />
      <Header type="hotels" />
        {isOpen && (
          <div className="slider">
            <div className="slideWrapper">
              <i class="fa-solid fa-xmark" id='close' onClick={() => setIsOpen(false)}></i>
              <i
              class="fa-solid fa-circle-arrow-left"
              id='arrow'
                onClick={() => moveHandler("l")}
              ></i>
              <img src={Photos[slidNumber].src} alt="sliderImg" className="slideImg" />
              <i
              class="fa-solid fa-circle-arrow-right"
              id='arrow'
                onClick={() => moveHandler("r")}
              ></i>
            </div>
          </div>
        )}
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAdress">
            <i class="fa-solid fa-location-dot"></i>
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDiatance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {Photos.map((item, i) => {
              return (
                <div className="hotelImgWrapper">
                  <img
                    alt="photo"
                    src={item.src}
                    onClick={() => handler(i)}
                    className="hotelImg"
                    height="200px"
                  />
                </div>
              );
            })}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located a 5-minutes Waolk from St. Florian's Gate in Krakow,
                Tower Street Apartments has accommodations with air Condtioning
                and free WiFi. the units come with hardwood floors and feature a
                fully equiped kitchenette with a microwave, a flat-screen TV,
                Located a 5-minutes Waolk from St. Florian's Gate in Krakow,
                Tower Street Apartments has accommodations with air Condtioning
                and free WiFi. the units come with hardwood floors and feature a
                fully equiped kitchenette with a microwave, a flat-screen TV, a
                paid airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Located in the real heart of Krakow, this property has a
                Excellent location score of 9.8
              </span>
              <h2>
                <b>$945</b>(9 nights)
              </h2>
              <button className="bookNow">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
}
