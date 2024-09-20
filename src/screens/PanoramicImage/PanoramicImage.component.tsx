import './PanoramicImage.style.sass';
import React, {useRef, useState} from "react";
import ArrayButton from "../../components/ArrayButton/ArrayButton";
import {useAppDispatch} from "../../react-redux/hooks";
import {screen_type} from "../../react-redux/bases/screen_type/screen_type";
import {usePanoramicImageGSAPAnimation} from "./usePanoramicImageGSAP.animation";
import {FindComponentFunction, ScreenSideButton} from "./findComponent.function";
import ImageSquarePresentationComponent from "../ImageSquarePresentation/ImageSquarePresentation.component";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

interface Props extends React.PropsWithChildren {
    background_image : string
}

const PanoramicImage = (props : Props) => {
    gsap.registerPlugin(useGSAP);
    const dispatch = useAppDispatch();

    const [isAnimatedExit, setIsAnimatedExit] = useState(false);
    const exitImgRef = useRef<HTMLImageElement>(null);
    const exitImgLeftArrow = useRef<HTMLImageElement>(null);
    const exitImgRightArrow = useRef<HTMLImageElement>(null);

    // useGSAP(() => {
    //     if (isAnimatedExit && exitImgRef.current && exitImgLeftArrow.current && exitImgRightArrow.current) {
    //         const timeline = gsap.timeline({
    //             onComplete : () => {
    //                 dispatch(screen_type.actions.changeScreenType())
    //             }
    //         });
    //         timeline
    //             .to(exitImgRef.current, {
    //                 yPercent: 30,
    //                 opacity : 0,
    //             })
    //             .to([exitImgLeftArrow.current, exitImgRightArrow.current], {
    //                 yPercent : 50,
    //                 opacity: 0,
    //                 duration: 0.2
    //             })
    //         timeline.play()
    //     }
    // });

    useGSAP(() => {
        if (isAnimatedExit) {
            gsap
                .to(exitImgRef.current, {
                    yPercent: 30,
                    opacity : 0,
                    onComplete : () => {
                        dispatch(screen_type.actions.changeScreenType())
                    }
                })
        }
    }, [isAnimatedExit]);

    const handleClick = (event : React.MouseEvent<HTMLDivElement>) => {
        if (event.detail === 2) {
            console.log("true")
            setIsAnimatedExit(true);
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
        <ArrayButton
            width={"50%"}
            source_image={FindComponentFunction(ScreenSideButton.Left) || "Null"}
            reference={left_img_ref}
            exitReference={exitImgLeftArrow}
        />
        <ImageSquarePresentationComponent
            background_image={props.background_image}
            reference={exitImgRef}
        />
        <ArrayButton
            width={"50%"}
            source_image={FindComponentFunction(ScreenSideButton.Right) || "Null"}
            reference={right_img_ref}
            exitReference={exitImgRightArrow}
        />
    </div>
}

export default PanoramicImage;
