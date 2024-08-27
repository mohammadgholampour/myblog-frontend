import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './actions';
import io from 'socket.io-client';

const socket = io('http://localhost:8000');

const App = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.posts);

    useEffect(() => {
        dispatch(fetchPosts());

        socket.on('post_update', (newPost) => {
            dispatch(fetchPosts());
        });

        return () => {
            socket.off('post_update');
        };
    }, [dispatch]);

    return (
        <div>
            <h1>My Blog</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
