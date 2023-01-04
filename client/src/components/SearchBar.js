import React, { useState } from "react";
import "../assets/styles/SearchBar.css";
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
    <div className="search text-gray-800 h-5 w-full sm:mr-5 mr-1 focus:outline-none">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <div className='searchIcon'><ion-icon name="search"></ion-icon></div>
          ) : (
            <button className="mt-1.5" id="clearBtn" onClick={clearInput}><ion-icon name="close"></ion-icon></button>
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