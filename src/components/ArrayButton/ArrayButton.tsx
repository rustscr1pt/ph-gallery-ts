import React, {RefObject} from "react";
import './ArrayButton.style.sass';
import {useAppDispatch} from "../../react-redux/hooks";
import {image_storage} from "../../react-redux/bases/image_storage/image_storage";

interface Props extends React.PropsWithChildren {
    width : string,
    source_image : string,
    reference : RefObject<HTMLImageElement>
}


const ArrayButton = (props : Props) => {
    const dispatch = useAppDispatch();

    return <div
        style={{width: props.width}}
        className="array-button-div"
    >
        <img
            ref={props.reference}
            style={{
                width: "50%",
                cursor: "pointer",
                outline: "none"
            }}
            alt="An array button for navigation between images"
            onClick={() => {
                dispatch(
                        props.source_image === "https://new-api.space/images/arrow-circle-left.svg"
                            ? image_storage.actions.goToThePreviousImage()
                            : image_storage.actions.goToTheNextImage()
                )}
            }
            src={props.source_image}>
        </img>
    </div>
}

export default ArrayButton;
