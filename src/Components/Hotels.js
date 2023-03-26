import React, { useState } from 'react';
import { Header } from './Header';
import { NavBar } from './NavBar';
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useLocation } from 'react-router-dom';
import { SearchItem } from './SearchItem';
import { Link } from 'react-router-dom';


export const Hotels = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [option, setOption] = useState(location.state.option);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);


  return (
    <div>
      <NavBar />
      <Header type="hotels" />
      <div className="hotels">
        <div className="hotels-wrapper">
          <div className="hotels-search">
            <h1 className="hotels-title">Search</h1>
            <div className="hotels-item">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="hotels-item">
              <label>Check-in date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            {/* start options items  */}
            <div className="hotels-item">
              <label>Options</label>
              <div className="hotels-option-item">
                <span className="hotels-option-text">
                  Min Price<small>(per night)</small>
                </span>
                <input type="number" className="hotels-option-inpt" min={1} />
              </div>
              <div className="hotels-option-item">
                <span className="hotels-option-text">
                  Max Price<small>(per night)</small>
                </span>
                <input type="number" className="hotels-option-inpt" min={1} />
              </div>
              <div className="hotels-option-item">
                <span className="hotels-option-text">Adult</span>
                <input
                  min={1}
                  type="number"
                  className="hotels-option-inpt"
                  placeholder={option.adult}
                />
              </div>
              <div className="hotels-option-item">
                <span className="hotels-option-text">Children</span>
                <input
                  min={0}
                  type="number"
                  className="hotels-option-inpt"
                  placeholder={option.children}
                />
              </div>
              <div className="hotels-option-item">
                <span className="hotels-option-text">Room</span>
                <input
                  min={1}
                  type="number"
                  className="hotels-option-inpt"
                  placeholder={option.room}
                />
              </div>
            </div>
            {/* end option items */}
            {/* start search btn */}
            <div>
              <Link to={`/hotels/re=?fgs49b`}>
                <button className="btn-all">Search</button>
              </Link>
            </div>
            {/* end search btn  */}
          </div>
          {/* start result side  */}
          <div className="hotels-result">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
          {/* end result side  */}
        </div>
      </div>
    </div>
  );
}
