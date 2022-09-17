import axios from 'axios';


// imports each gallery object and creates a gallery item with a like button and text with number of likes displayed. 
// {id: 2, path: '../images/deer.jpg', description: 'Photo of a dear taken at Glacier National Park.', likes: 0}

export default function GalleryItem({galleryItem, fetchItems}){
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
        <div>
            <img src={galleryItem.path} alt={galleryItem.description} />
            <p>{galleryItem.likes} people like this photo!</p>
            <button onClick={updateLikes}>Like</button>
        </div>
    );

}