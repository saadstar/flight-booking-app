import React from 'react'
import { featuredPropertyData } from './DummyData';
export const FeaturedProperty = () => {
  const disply = featuredPropertyData.map((item) => {
    return (
      <div className="featuredpro-item">
        <img alt="featured-property" src={item.image} />
        <span className="name">{ item.name}</span>
        <span className="city">{ item.city}</span>
        <span className="price">{ item.price}</span>
        <div className="ratting">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    );
  }); 
  return (
    <div className="featured-property">
      { disply}
      { disply}
      { disply}
      { disply}
    </div>
  );
}
