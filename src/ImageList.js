import ImageBoard from "./ImageBoard";
import ImageForm from "./ImageForm";

function ImageList({imgurl, imgCap}){
  
    return (
        <figure className='imgBlock'>
            <img src={imgurl} alt='photo' />
            <figcaption className='caption'>{imgCap}</figcaption>
        </figure>
    );
};

export default ImageList;