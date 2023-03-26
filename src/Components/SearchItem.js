import React from 'react'

export const SearchItem = () => {
  return (
    <div className='waller'>
      <div className="search-item">
        <div className="dispaly-flex">
          <img
            src={`./images/search.jpg`}
            alt="search"
            height={180}
            width="150px"
          />
          <div className="content-x">
            <h4>Tower Street Apartments</h4>
            <p className="ayna">500m from center</p>
            <button className="btn-green">Free airport taxi</button>
            <h6>Studio Apartment With Air Conditioning</h6>
            <p className="ayna">
              Entire Studio<span></span> 1 Bathroom<span></span>
              21m 1 Full bed
            </p>
            <p className="free">Free Cancellation</p>
            <p className="fae">
              you can cancel later,so lock in the great price today!
            </p>
          </div>
          <div className='create'>
            <div className="d-flex">
              <span>Excellent</span>
              <button className="blue">8.9</button>
            </div>
            <span>$112</span>
            <p className="ayna">icludes taxes and fees</p>
            <button className="btn-all">See availbale</button>
          </div>
        </div>
      </div>
    </div>
  );
}
