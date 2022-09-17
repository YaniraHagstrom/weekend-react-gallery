import React from 'react';
import './App.css';
import Gallery from '../GalleryList/GalleryList.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios';



function App() {
  useEffect(() => {
    fetchItems();
  }, [])

  // Used to set state once the gallery Data is received
  let [galleryList, setGalleryList]= useState();

  // GET request to get data from server side data file.
  const fetchItems = ()=>{
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      // Data received : {id: 2, path: '../images/deer.jpg', description: 'Photo of a dear taken at Glacier National Park.', likes: 0}...

      setGalleryList(response.data);
    }).catch((error)=> {
      console.log('error getting items', error);
    })
  }






    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList = {galleryList}/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
