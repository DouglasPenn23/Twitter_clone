import React, {useState} from 'react'
import "./TweetBox.css";
import {Avatar, Button} from '@mui/material';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Douglas Pennington",
            username: "DouglasPenn23",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://www.nbcsports.com/sites/rsnunited/files/styles/article_hero_image/public/archive/assets_article/chicago/2019/11/20/rose_final_2.jpg",
        });

        setTweetMessage("");
        setTweetImage("");
    };

  return (

    <div className="tweetBox">
        <form>
            <div className='tweetBox__input'>
                <Avatar src="https://www.lsuagcenter.com/~/media/system/1/d/d/f/1ddf68ca30f124ce7770fdbe96ba947e/mottled%20duckjpg.jpg?h=3442&la=en&w=3591"></Avatar>
                <input
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's happening?"
                type="text"
                />
            </div>
            <input
            onChange={(e) => setTweetImage(e.target.value)}
            value={tweetImage}
            className="tweetBox__imageInput" 
            placeholder="Optional: Enter image URL"
            type="text"
            />

            <Button 
            onClick={sendTweet} 
            type="submit" 
            className="tweetBox__tweetButton"
            >
                Tweet
                </Button>
            </form>
        </div>
  );
}

export default TweetBox
