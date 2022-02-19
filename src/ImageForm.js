import {useState} from 'react';


function ImageForm({images, setImages}) {

const [imgurl, setImgurl] = useState('');
const [imgCap, setImgCap] = useState('');


    const clear = (e) =>{
        setImgurl('');
        setImgCap('');
    }
    
    const handleSubmit = () => {
        setImages([...images, {
            imgurl: imgurl, 
            imgCap: imgCap, 
            id: images.length + 1
        }]);
      }
          

    
    // const [state, setState] = useState({
    //     imgUrl: '',
    //     imgCap: '',
    // })

    // const handleInput = (e) =>{
    //     e.preventDefault()
    //     setState({
    //     ...state,
    //     [e.target.name]: e.target.value,
    // })
    // }
    const urlValue = (e) =>{
        setImgurl(e.target.value)
    }

    const captionValue = (e) => {
        setImgCap(e.target.value)
    }





    return (
    <form>
        <h2>Add your picture</h2>
        <div>
            <input name = 'imgurl' type = 'text' placeholder ='Image URL' value ={imgurl} onChange = {urlValue}></input>
            <input name = 'imgCap' type = 'text' placeholder ='Image Caption' value ={imgCap} onChange = {captionValue}></input>
        </div>
    <button type = "submit" onClick={handleSubmit}> Add Image </button>
    <button type = "button" onClick = {clear}>Cancel</button>
    </form>
    )
};

export default ImageForm;