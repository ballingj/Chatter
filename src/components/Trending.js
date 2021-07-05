import React from 'react'
import "../css/Trending.css";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Chatter" type="text" />
      </div>
     
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        {/* add Yousef's items here */}

      </div>
    </div>
  )
}

export default Widgets
