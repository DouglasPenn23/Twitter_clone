import React, {useState, useEffect} from 'react'
import TweetBox from './TweetBox';
import Post from './Post';
import "./Feed.css";
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
  // useState() allows us to utilize the state feature in React
  // In this application we'll be using state to control how we handle the posts & setting the posts
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    // Go into the database, look at the collection of posts
    // Take a snapshot then use the snapshot to set the posts based on the data.
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);


  return (
    <div className="feed">
      <div className='feed__header'>
      <h2>Home</h2>
    </div>

    
    <TweetBox />
  
  <FlipMove>
  {posts.map(post => (
    <Post
    // The Following is an example of props
      key={post.text}
      displayName={post.displayName}
      username={post.username}
      verified={true}
      text={post.text}
      avatar= {post.avatar}
      image={post.image}
    />
  ))}
  </FlipMove>
</div>
);
}

export default Feed