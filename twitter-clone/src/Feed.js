import React from 'react'
import TweetBox from './TweetBox';
import Post from './Post';
import "./Feed.css";


function Feed() {
  return (
    <div className="feed">
      <div className='feed__header'>
      <h2>Home</h2>
    </div>

    
    <TweetBox />

    <Post
    displayName="Lebron Lames"
    username='Lebron'
    verified={true}
    text="Lakers will lose again this year"
    avatar="https://s1.stabroeknews.com/images/2021/01/LeBron-Jamess.jpg"
    image="https://giphy.com/gifs/sbnation-sbnation-paul-lebron-9I7LBisi4GtAA"
    />

    
    </div>
  )
}

export default Feed