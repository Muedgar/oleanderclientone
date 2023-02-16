import React, {useState, useEffect} from "react";
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// import images
import imageOne from "./assets/1.JPG";
import imageTwo from "./assets/2.JPG";
import imageThree from "./assets/3.JPG";
import imageFour from "./assets/4.JPG";
import imageFive from "./assets/5.JPG";
import imageSix from "./assets/6.jpg";
import imageSeven from "./assets/7.jpg";
import imageEight from "./assets/8.jpg";
import imageNine from "./assets/9.jpg";

import "./gallery.css";

import mg from "./assets/magnifying.svg";

function Gallery() {
    const onInit = () => {
        
    };
    const [images, setImages] = useState([imageOne,imageTwo,imageThree,imageFour,imageFive,imageSix,imageSeven,imageEight,imageNine]);

    useEffect(() => {
        setImages([imageOne,imageTwo,imageThree,imageFour,imageFive,imageSix,imageSeven,imageEight,imageNine])
    },[])

    return (
        <div id="gallery" className="galleryContainer">
            <div className="galleryActionCall">
                <h1>Photo Gallery</h1>
                <p></p>
                <button onClick={e => {
                    e.preventDefault();
                    document.querySelector(".lg-react-element").children[0].click();

                }}>View All Gallery</button>
            </div>
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                {
                  images.map((image,i) => (
                    <a key={i} href={image}>
                    <img alt={`students`} src={image} />
                    <span><img src={mg} alt='zoom' /></span>
                </a>
                  ))  
                }
            </LightGallery>
        </div>
    );
}


export default Gallery;