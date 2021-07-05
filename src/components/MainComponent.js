import React from "react";
import Sidebar from "./SidebarComponent";
import Feed from './Feed';
import Trending from './Trending';
import '../css/Main.css';

function Main() {
  return (
    <div class="main">
      {/*Sidebar component - contains the side menu*/}
      <Sidebar />
      {/*Feed components - contains the Chatterbox and posts components*/}
      <Feed />
      {/*Trending contains the third right section of the page*/}
      <Trending />
    </div>
  );
}

export default Main;
