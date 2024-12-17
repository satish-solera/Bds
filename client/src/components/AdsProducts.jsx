import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function AdsProducts() {
  const [query, setQuery] = useState(""); // State to hold the search input
  const [results, setResults] = useState([]); // State to hold the search results

  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!query) return; // Do not search if query is empty

    try {
      // Make a GET request to the search API with the query as a parameter
      const response = await axios.get(
        `http://localhost:8000/api/ads/adstype/iteam`
      );

      setResults(response.data); // Update results state with response data
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error); // Log any error
    }
  };

  const data = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
    { id: 4, name: "Date" },
    { id: 5, name: "Elderberry" },
  ];

  // const filteredData = searchIteam.filter(item =>
  //   item.name.toLowerCase().includes(searchIteam.toLowerCase())
  // );

  return (
    <>
       
      <div className='ml-5 mt-10 flex justify-center items-center'>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)} // Update query state on input change
            placeholder="Search..."
            className="border border-black"
          />
          <button type="submit" className="ml-2">Search</button>
        </form>

        <div className="">
          {results.length > 0 ? (
            <div className="">
              {results.map((search) => {
                return (
                  <div className="">
                    <h1>{search.nameOfAds}</h1>
                  </div>
                );
              })}
            </div>
          ) : (
            <h1 className="ml-1">search products</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default AdsProducts;
