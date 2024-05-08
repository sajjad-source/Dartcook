import {
    BrowserRouter, Routes, Route,
} from 'react-router-dom';
import React from 'react';
import NewPost from './NewPost';
import Posts from './Posts';
import Post from './Post';
import NavBar from './NavBar';
import FallBack from './FallBack';

export default function App(props) {
  return (
    <BrowserRouter>
      <div className="font-montserrat">
        <NavBar />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path="/meals/:mealID" element={<Post />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
  }
