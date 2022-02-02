
import './App.css';
import ImageForm from './ImageForm'; 
import ImageList from './ImageList';
import ImageBoard from './ImageBoard';
import { useState } from 'react';

function App(props) {
const [img, setImg]= useState('')

const addImg = (imgUrl, imgCap) => {
  const newImg = {
    imgUrl,
    imgCap,
  }
  setImg([...img, newImg]);

}

  return (
    <ImageBoard />
  );
}

export default App;
