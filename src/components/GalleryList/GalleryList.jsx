
// import galleryList from App.jsx which contains an array of all of the gallery objects:
// example data: [{id: 2, path: '../images/deer.jpg', description: 'Photo of a dear taken at Glacier National Park.', likes: 0}...]
export default function GalleryList({galleryList}){
    return(
        <div>
            {galleryList.map( galleryItem => {
                return(
                    <GalleryItem galleryItem = {galleryItem}/>
                )
            })}
        </div>
    )
}