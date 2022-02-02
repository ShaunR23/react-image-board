import {useState} from 'react';
function ImageForm() {

const [imgUrl, setImgUrl] = useState('');
const [imgCaption, setImgCaption] = useState('');

    const clear = (e) =>{
        setImgUrl('');
        setImgCaption('');
    }
    const submit = (e) =>{
        e.preventDefault();
        if(imgUrl.trim().length === 0){
            return;
          }
    addImg(imgUrl, imgCaption)
          setImgUrl('');
          setImgCaption('');

    }

    const urlValue = (e) =>{
        setImgUrl(e.target.value)
    }

    const captionValue = (e) => {
        setImgCaption(e.target.value)
    }





    return (
    <form onSubmit = {submit}>
        <h2>Add your picture</h2>
        <div>
            <input className = '' type = 'text' placeholder ='Image URL' value ={imgUrl} onChange = {urlValue}></input>
            <input className = '' type = 'text' placeholder ='Image Caption' value ={imgCaption} onChange = {captionValue}></input>
        </div>
    <button type = "submit"> Add Image </button>
    <button type = "button" onClick = {clear}>Cancel</button>
    </form>
    )
};

export default ImageForm;