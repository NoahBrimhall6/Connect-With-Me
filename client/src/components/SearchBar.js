import React, { useState } from "react";
import "./SearchBar.css";
import searchIcon from "../assets/images/search.png";
import closeIcon from "../assets/images/cancel.png";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
        if(value.firstName.toLowerCase().includes(searchWord.toLowerCase())){           // Manamana- Currently searches users first/last name, username, and email.
            return true;
        }else if(value.lastName.toLowerCase().includes(searchWord.toLowerCase())){
            return true;

        }else if(value.username.toLowerCase().includes(searchWord.toLowerCase())){
            return true;

        }else if(value.email.toLowerCase().includes(searchWord.toLowerCase())){
            return true;

        }else {
            return false;
        }
      
      
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
//console.log(filteredData);
  return (
    <div className="search  text-gray-800 sm:w-30 h-9 w-full sm:mr-5 md:w-50 lg:w-72 mr-1 lg:mb-0 py-2.5 rounded px-2 focus:outline-none">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <img className='searchIcon' alt='search' src={searchIcon}></img>
          ) : (
            <img id="clearBtn" alt='clear' src={closeIcon} onClick={clearInput}></img>
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={"https://www.google.com/"} target="_blank">
                <p>{value.firstName} {value.lastName} - {value.username}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;