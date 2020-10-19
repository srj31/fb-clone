import React, {useState, useEffect} from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender';
import Post from './Post';
import Pusher from 'pusher-js'
import axios from '../axios'

import db from '../firebase'

const pusher = new Pusher('1f2e47f9876100c01635', {
    cluster: 'ap1'
});



function Feed() {

    const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])

    const syncFeed = () => {
        axios.get('/retrieve/posts')
            .then((res) => {
                console.log(res.data)
                setPostsData(res.data)
            })
    }

    useEffect(() => {
        const channel = pusher.subscribe('posts');
        channel.bind('inserted', function(data) {
            syncFeed()
        });
    }, [])

    useEffect(() => {
        syncFeed()
    } , [])


    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            {
                postsData.map((post)=> (
                 <Post
                    key = {post.id}
                    profilePic={post.avatar}
                    message = {post.text}
                    timestamp = {post.timeStamp}
                    username={post.user}
                    image={post.image}
                />
                ))
            }
        </div>
    )
}

export default Feed
