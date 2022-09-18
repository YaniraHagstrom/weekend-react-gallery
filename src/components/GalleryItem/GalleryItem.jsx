import axios from 'axios';
import {useState} from 'react';


// imports each gallery object and creates a gallery item with a like button and text with number of likes displayed. 
// {id: 2, path: '../images/deer.jpg', description: 'Photo of a dear taken at Glacier National Park.', likes: 0}



export default function GalleryItem({galleryItem, fetchItems}){
    const [photoDescription, setPhotoDescription] = useState(false);
    
    // These two constants initialize tooltips for the image and
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    
    
    // This creates a toggle effect when the photo is clicked. 
    const showDescription = ()=>{
        setPhotoDescription(!photoDescription);
    }

    // console.log(galleryItem);
    const updateLikes = ()=> {
        // send PUT request to server to update the number of likes. The server side updates the count.
        // console.log('click');
        axios({
            method: 'PUT',
            url: `/gallery/like/${galleryItem.id}`
        }).then((response)=> {
            // console.log('put request is all good', response);
            fetchItems();
        }).catch((error)=> {
            console.log('error with like button update:', error)

        })
    }

    return(
        <div className='card'>
            <div onClick={showDescription}>
                {photoDescription?
                <p className="description">{galleryItem.description}</p>:
                <img type="button" className="card-img-top" src={galleryItem.path} alt={galleryItem.description} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Tooltip on top"/> 
                    }
            </div>
            <div className="container">
                <p className="love" type="button" onClick={updateLikes} data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Love This">❤️</p>
                <p className="card-text">{galleryItem.likes} people love this!</p>
            </div>
        </div>
    );

}

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}