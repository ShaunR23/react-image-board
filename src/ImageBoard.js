import ImageForm from "./ImageForm";
import ImageList from "./ImageList";
import { useState } from "react";


function ImageBoard({}) {
const [images, setImages] = useState([{
    
        
          imgurl:'https://www.rivieratravel.co.uk/blog/wp-content/uploads/2019/07/famous-waterfalls-Iguazu-Waterfalls-Argentina-.jpg',
          imgCap: "waterfall",
          id: '1'
        },
        {
          imgurl:  'https://th-thumbnailer.cdn-si-edu.com/A5v0aVWMyApsF2yZuLXY3kWObaU=/fit-in/1600x0/filters:focal(452x280:453x281)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b0/e2/b0e22e41-79d2-418e-9c55-01e396bd9891/istock-892494008.jpg',
          imgCap:  'another waterfall',
          id: '2'
}]);


    
    return (
      <div>

        <ImageForm images={images} setImages={setImages} />
        <ImageList images={images} />
      </div>
    )
}

export default ImageBoard;