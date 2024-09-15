import './PanoramicImage.style.sass';
import React, {useRef} from "react";
import ArrayButton from "../../components/ArrayButton/ArrayButton";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {useAppDispatch, useAppSelector} from "../../react-redux/hooks";
import {screen_type} from "../../react-redux/bases/screen_type/screen_type";

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

    gsap.registerPlugin(useGSAP);

    const div_ref = useRef<HTMLDivElement>(null);
    const left_img_ref = useRef<HTMLImageElement>(null);
    const right_img_ref = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        const timeline = gsap.timeline();
        timeline
            .from(div_ref.current, {
                yPercent : -30,
                opacity : 0
            })
            .from([left_img_ref.current, right_img_ref.current], {
                yPercent : -50,
                opacity: 0,
                duration: 0.2
            })

    }, [useAppSelector((state) => state.image_storage.selected_image)])

    return <div
        ref={div_ref}
        style={{
            backgroundImage : `url("${props.background_image}")`
        }}
        onClick={handleClick}
        className="panoramic-image">
        <ArrayButton
            grid_columns={"1 / 2"}
            grid_rows={"3 / 4"}
            width={"100%"}
            source_image={"/images/arrow-circle-left.svg"}
            reference={left_img_ref}
        />
        <ArrayButton
            grid_columns={"4 / 5"}
            grid_rows={"3 / 4"}
            width={"100%"}
            source_image={"/images/arrow-circle-right.svg"}
            reference={right_img_ref}
        />
    </div>
}

export default PanoramicImage;
