import './image_view.style.sass';
import React from "react";
import image from "../../images/image.png"

interface Props extends React.PropsWithChildren {
    width : string
}

const image_view = (props : Props) => {
    return <div className="image-view-div" style={{width : props.width}}>
        <img className='image-view-img' src={image} onClick={() => console.log("hello")}/>
    </div>
}

export default image_view;
