import React from "react";
import "./filter.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const Filter = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location?.state?.destination);
    const [date, setDate] = useState(location?.state?.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location?.state?.options);
    const startDate = new Date(0);
    
  return (
    <div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="text-2xl lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            {/* <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0]?.startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0]?.endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item?.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div> */}
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date? date[0].startDate:startDate,
                "MM/dd/yyyy"
              )} to ${format(date? date[0].endDate:startDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item?.selection])}
                  minDate={new Date()}
                  ranges={date} 
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="text-sm">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" style={{ width: '120px' }}/>
                </div>
                <div className="lsOptionItem">
                  <span className="text-sm">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" style={{ width: '120px' }}/>
                </div>
                <div className="lsOptionItem">
                  <span className="text-sm">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options?.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="text-sm">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options?.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="text-sm">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options?.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
