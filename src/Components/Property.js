import React from 'react'

export const Property = () => {
  return (
    <div className="property">
      <div className="property-item">
        <img alt="propert" src={`./images/hotel.jpg`} />
        <div className="property-title">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="property-item">
        <img alt="propert" src="./images/apartment.jpg" />
        <div className="property-title">
          <h1>Apartments</h1>
          <h2>921 apartments</h2>
        </div>
      </div>
      <div className="property-item">
        <img alt="propert" src="./images/resort.jpg" />
        <div className="property-title">
          <h1>Resorts</h1>
          <h2>49 resorts</h2>
        </div>
      </div>
      <div className="property-item">
        <img alt="propert" src="./images/villa.jpg" />
        <div className="property-title">
          <h1>Villas</h1>
          <h2>35 Villas</h2>
        </div>
      </div>
      <div className="property-item">
        <img alt="propert" src="./images/cabin.jpg" />
        <div className="property-title">
          <h1>Cabins</h1>
          <h2>253 cabins</h2>
        </div>
      </div>
    </div>
  );
}
