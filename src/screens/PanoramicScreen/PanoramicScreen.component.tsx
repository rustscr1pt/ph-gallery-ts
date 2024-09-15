import './PanoramicScreen.style.sass';
import PanoramicImageComponent from "../PanoramicImage/PanoramicImage.component";
import {useAppSelector} from "../../react-redux/hooks";
import React from "react";

const PanoramicScreen = () => {
    return <div
        className="panoramic-screen"
    >
        <PanoramicImageComponent
            background_image={useAppSelector((state) => state.image_storage.selected_image)}
        />
    </div>
}

export default PanoramicScreen;
