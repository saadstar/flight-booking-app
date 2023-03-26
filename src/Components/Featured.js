import React from 'react'
import { featuredData } from './DummyData';
export const Featured = () => {
  return (
    <div className="featured">
   {featuredData.map((item) => {
    return (
      <div className="featured-item">
        <img src={item.image} alt="featured" />
        <div className="featured-title">
          <h1>{item.name}</h1>
          <h2>{item.property}</h2>
        </div>
      </div>
    );
  })}
    </div>
  );
}
