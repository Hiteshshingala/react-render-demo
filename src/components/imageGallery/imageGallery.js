import React, {useState} from 'react'
import { useHistory } from "react-router";

function ImageGallery() {
    const history = useHistory();
    const imageData = 
        [
            {
                id: 1,
                name: 'img1',
                img: 'https://via.placeholder.com/200/0000FF/808080'
            },
            {
                id:2,
                name: 'img2',
                img: 'https://picsum.photos/200'
            }
        ];
    
    const [images, setImages] = useState(imageData)
    const removeImage = (imageId) => {
        const newImages = images.filter(img => img.id !== imageId )
        setImages(newImages);
    }

    const nextStep = () => {
        history.push("/message");
    }

    
    return (
        <div>
            {images && images.length > 0 && images.map(element => {
                return (
                    <>
                        <div className="image" key={element.id}>
                            <img className="" src={element.img} />
                            <button className="remove-img-btn" onClick={() => {removeImage(element.id)}} > X </button>    
                        </div>
                    </>
                )
            })}

            <button onClick={() => {nextStep()}}>Next Question</button>

        </div>
    )
}


export default ImageGallery

