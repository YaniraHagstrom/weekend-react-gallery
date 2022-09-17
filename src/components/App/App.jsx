import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';


function App() {
  useEffect(() => {
    fetchItems();
  }, [])
  
  // Used to set state once the gallery Data is received
  let [galleryList, setGalleryList]= useState([]);
  
  // GET request to get data from server side data file.
  const fetchItems = ()=>{
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      // Data received : {id: 2, path: '../images/deer.jpg', description: 'Photo of a dear taken at Glacier National Park.', likes: 0}...
      console.log(response.data);
      setGalleryList(response.data);
    }).catch((error)=> {
      console.log('error getting items', error);
    })
  }
  // console.log(galleryList);



    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList = {galleryList} fetchItems={fetchItems}/>
      </div>
    );
}

export default App;
