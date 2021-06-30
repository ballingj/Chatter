import React from 'react'
import "./Post.css"
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"


function Post({
  displayNAme,
  userName,
  verified,
  text,
  image,
  avatar
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="../public/images/jeff.png" />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              Jeff Ballinger <span><VerifiedUserIcon className="post_badge" /></span>
            </h3>
          </div>
          <div>
            <p>Get some Chatter going!</p>
          </div>
        </div>
        <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="coding" />
      </div>
    </div>
    );
  }

export default Post;