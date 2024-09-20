import './ImageSquarePresentation.style.sass';
import React from "react";

interface Props extends React.PropsWithChildren {
    background_image : string,
    reference : React.RefObject<HTMLImageElement>
}

const ImageSquarePresentationComponent = (props : Props) => {
    return <div
        className='image-square-presentation'
    >
        <img
            className='square-image'
            src={props.background_image}
            ref={props.reference}
        /></div>
}

export default ImageSquarePresentationComponent;
