import './PanoramicImage.style.sass';
import React, {useState} from "react";
import ArrayButton from "../../components/ArrayButton/ArrayButton";
import {usePanoramicImageGSAPAnimation} from "./usePanoramicImageGSAP.animation";
import {FindComponentFunction, ScreenSideButton} from "./findComponent.function";
import ImageSquarePresentationComponent from "../ImageSquarePresentation/ImageSquarePresentation.component";
import {useExitPanoramicImageGSAPAnimation} from "./useExitPanoramicImageGSAP.animation";

interface Props extends React.PropsWithChildren {
    background_image : string
}

const PanoramicImage = (props : Props) => {
    // State for triggering the exit animation
    const [isAnimatedExit, setIsAnimatedExit] = useState(false);

    // When image is double-clicked - it triggers isAnimatedExit and animation starts playing
    const handleClick = (event : React.MouseEvent<HTMLDivElement>) => {
        if (event.detail === 2) {
            console.log("true")
            setIsAnimatedExit(true);
        }
    }

    // Get first pack of refs for playing animation when component mounts
    const {
            div_ref,
            left_img_ref,
            right_img_ref
    } = usePanoramicImageGSAPAnimation()

    // Get final ref for exit animation.
    const exitImgRef = useExitPanoramicImageGSAPAnimation(isAnimatedExit, left_img_ref, right_img_ref);

    return <div
        ref={div_ref}
        onClick={handleClick}
        className="panoramic-image">
        <ArrayButton
            width={"50%"}
            source_image={FindComponentFunction(ScreenSideButton.Left) || "Null"}
            reference={left_img_ref}
        />
        <ImageSquarePresentationComponent
            background_image={props.background_image}
            reference={exitImgRef}
        />
        <ArrayButton
            width={"50%"}
            source_image={FindComponentFunction(ScreenSideButton.Right) || "Null"}
            reference={right_img_ref}
        />
    </div>
}

export default PanoramicImage;
