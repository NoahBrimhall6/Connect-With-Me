import React, { useState } from "react";
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SEARCHUSERS, QUERY_SEARCHJOBLISTINGS, QUERY_SEARCHPOSTS } from '../utils/queries'; //Manamana: Fill later


const Search = ({ placeholder, data }) => {

  
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");



    return (
        <div className="search  text-gray-800 sm:w-30 h-9 w-full sm:mr-5 md:w-50 lg:w-72 mr-1 lg:mb-0 py-2.5 rounded px-2 focus:outline-none">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          // onChange={handleFilter}
        />
        <div className="searchIcon">
          
        </div>
      </div>
      
    </div>

    // <div className="search  text-gray-800 sm:w-30 h-9 w-full sm:mr-5 md:w-50 lg:w-72 mr-1 lg:mb-0 py-2.5 rounded px-2 focus:outline-none">
    //   <div className="searchInputs">
    //     <input
    //       type="text"
    //       placeholder={placeholder}
    //       value={wordEntered}
    //       onChange={handleFilter}
    //     />
    //     <div className="searchIcon">
    //       {filteredData.length === 0 ? (
    //         <img className='searchIcon' alt='search' src={searchIcon}></img>
    //       ) : (
    //         <img id="clearBtn" alt='clear' src={closeIcon} onClick={clearInput}></img>
    //       )}
    //     </div>
    //   </div>
    //   {filteredData.length != 0 && (
    //     <div className="dataResult">
    //       {filteredData.slice(0, 15).map((value, key) => {
    //         return (
    //           <a className="dataItem" href={`/Profile/${value._id}`} target="_blank">
    //             <p>{value.firstName} {value.lastName} - {value.username}</p>
    //           </a>
    //         );
    //       })}
    //     </div>
    //   )}
    // </div>
  );
}

export default Search;