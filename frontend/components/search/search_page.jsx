import React from 'react';
import SearchPageSearchBar from './search_page_serach_bar';
import SearchFilter from './seach_filter';
import RestaurantIndex from '../restaurant/restaurant_index';

const SearchPage = ({ restaurants, updateFilter, fetchRestaurants, location}) => {
    return (
        <div className="search-page">
            <SearchPageSearchBar 
                updateFilter={updateFilter}
            />
            <div className="search-filter-container">
                <SearchFilter 
                    updateFilter={updateFilter}
                    searchTarget={
                        location.state ? location.state.searchTarget : null
                    }
                    fetchRestaurants={fetchRestaurants}
                />
            </div>
            <div className="search-result-container">
                <RestaurantIndex 
                    restaurants={restaurants}
                />
            </div>  
            
        </div>
    )     
};

export default SearchPage;

