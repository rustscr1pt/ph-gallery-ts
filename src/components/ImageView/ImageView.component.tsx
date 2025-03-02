import './ImageView.style.sass';
import React from "react";
import {useAppDispatch} from "../../react-redux/hooks";
import {screen_type} from "../../react-redux/bases/screen_type/screen_type";
import {image_storage} from "../../react-redux/bases/image_storage/image_storage";

interface Props extends React.PropsWithChildren {
    width : string
    image_source : string
}

const ImageView = (props : Props) => {
    const dispatch = useAppDispatch();
    return <div
        className="image-view-div"
        style={{width : props.width}}
    >
        <img
            className='image-view-img'
            src={props.image_source}
            alt="A single image in a row in the main screen"
            onClick={() =>
            {
                dispatch(image_storage.actions.changeSelectedImage(props.image_source))
                dispatch(screen_type.actions.changeScreenType())
            }
        }
        />
    </div>
}

export default ImageView;
