import React from 'react'
import "./TweetBox.css";
import {Avatar, Button, Input } from '@mui/material';

function TweetBox() {
  return <div className="TweetBox">
    <form>
        <div className='tweetBox__input'>
            <Avatar src="https://www.lsuagcenter.com/~/media/system/1/d/d/f/1ddf68ca30f124ce7770fdbe96ba947e/mottled%20duckjpg.jpg?h=3442&la=en&w=3591"></Avatar>
            <input placeholder="What's happening?" type="text"/>
        </div>
        <input 
        className="tweetBox_imageInput" 
        placeholder="Optional: Enter image URL"
        type="text"
        />

        <Button className="tweetBox__tweetButton">Tweet</Button>
    </form>
    </div>;
  
}

export default TweetBox
