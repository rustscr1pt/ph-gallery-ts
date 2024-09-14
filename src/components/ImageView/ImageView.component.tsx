import './ImageView.style.sass';
import React from "react";
import image from "../../images/image.png"
import {useAppDispatch} from "../../react-redux/hooks";
import {screen_type} from "../../react-redux/bases/screen_type/screen_type";

interface Props extends React.PropsWithChildren {
    width : string
}

const ImageView = (props : Props) => {
    const dispatch = useAppDispatch();
    return <div className="image-view-div" style={{width : props.width}}>
        <img className='image-view-img' src={image} onClick={() => dispatch(screen_type.actions.changeScreenType())}/>
    </div>
}

export default ImageView;
