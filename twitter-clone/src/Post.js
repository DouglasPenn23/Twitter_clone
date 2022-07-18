import React from 'react'
import "./Post.css";
import { Avatar } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';


function Post({ displayName, username, verified, text, image, avatar}) {
  return(
    <div className="post">
        <div className="post__avatar">
        <Avatar src="https://www.captainmitchs.com/wp-content/uploads/2018/01/wood-duck-PFYHVZN.jpg" />
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        Jimmy John{" "} 
                            <span>
                            <VerifiedUserIcon className="post__badge" /> 
                            </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p> I Challenge you to be the best coder you can be. </p>
                </div>
            </div>
            <img src="https://th.bing.com/th/id/R.3b33718921fc7c64120c3b65ecf386a4?rik=sRwZDndUfHVLxQ&riu=http%3a%2f%2fwww.saic.edu%2f%7eanelso13%2fgif%2fimages%2fcat14.gif&ehk=9lh2HAMRMJuPNR%2fSPLVMk27UjjMgb%2bJjsPACnkh1ObY%3d&risl=&pid=ImgRaw&r=0" 
            alt="" 
            />
            <div className="post__footer">
            <ChatBubbleOutlineIcon fontsize="small" />
            <RepeatIcon fontsize="small"/>
            <FavoriteBorderIcon fontsize="small" />
            <PublishIcon fontsize="small"/>
            </div>
        </div>
    </div>
  );
}

export default Post