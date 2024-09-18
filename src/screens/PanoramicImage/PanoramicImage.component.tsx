import './PanoramicImage.style.sass';
import React from "react";
import ArrayButton from "../../components/ArrayButton/ArrayButton";
import {useAppDispatch} from "../../react-redux/hooks";
import {screen_type} from "../../react-redux/bases/screen_type/screen_type";
import {usePanoramicImageGSAPAnimation} from "./usePanoramicImageGSAP.animation";
import {FindComponentFunction, ScreenSideButton} from "./findComponent.function";
import ImageSquarePresentationComponent from "../ImageSquarePresentation/ImageSquarePresentation.component";

interface Props extends React.PropsWithChildren {
    background_image : string
}

const PanoramicImage = (props : Props) => {

    const dispatch = useAppDispatch();

    const handleClick = (event : React.MouseEvent<HTMLDivElement>) => {
        if (event.detail === 2) {
            dispatch(screen_type.actions.changeScreenType())
        }
    }

    const {
            div_ref,
            left_img_ref,
            right_img_ref
    } = usePanoramicImageGSAPAnimation()

    return <div
        ref={div_ref}
        onClick={handleClick}
        className="panoramic-image">
        <ImageSquarePresentationComponent background_image={props.background_image}/>
        <ArrayButton
            grid_columns={"1 / 3"}
            grid_rows={"7 / 10"}
            width={"100%"}
            source_image={FindComponentFunction(ScreenSideButton.Left) || "Null"}
            reference={left_img_ref}
        />
        <ArrayButton
            grid_columns={"10 / 12"}
            grid_rows={"7 / 10"}
            width={"100%"}
            source_image={FindComponentFunction(ScreenSideButton.Right) || "Null"}
            reference={right_img_ref}
        />
    </div>
}

export default PanoramicImage;
