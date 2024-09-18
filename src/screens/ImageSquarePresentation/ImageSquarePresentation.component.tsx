import './ImageSquarePresentation.style.sass';
import React from "react";

interface Props extends React.PropsWithChildren {
    background_image : string
}

const ImageSquarePresentationComponent = (props : Props) => {
    return <div
        className='image-square-presentation'
    >
        <img className='panoramic-img-hash' src={props.background_image}/></div>
}

export default ImageSquarePresentationComponent;
