import React from "react";

const Search = () => {
    return (
        <form className="searchBar">
            <input
                type="search"
                className="locationSearch"
                placeholder="Add location"
            />
            <input type="search" className="guest" placeholder="Add guests" />
            <button type="submit" className="searchBtn">
                <span className="material-icons">search</span>
            </button>
        </form>
    );
};

export default Search;
