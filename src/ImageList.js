import ImageBoard from "./ImageBoard";
import ImageForm from "./ImageForm";

function ImageList({images}) {
    const imagesHTML = images.map((img =>
        <figure id = {img.id}>
            <img imgurl = {img.imgurl} />
            <figcaption>{img.imgCap}</figcaption>
        </figure>
    ));
    return (
        <div>
        {imagesHTML}
        </div>
    
    )} 
    

export default ImageList;