import "./MainScreen.style.sass"
import ImagesRow from "../ImagesRow/ImagesRow.component";
import React from "react";
import {useAppSelector} from "../../react-redux/hooks";
import imagesForRows from "./ImagesForRows.function";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

interface Props extends React.PropsWithChildren {
    margin : string
}

const MainScreen = (props : Props) => {
    let images_buffer : string[][] = imagesForRows(useAppSelector((state) => state.image_storage.value));

    useGSAP(() => {
        const timeline = gsap.timeline();
        timeline
            .from(document.querySelectorAll('.image-view-div'), {
                opacity: 0,
                scale: 0,
                yPercent: -50,
                duration: 0.3,
                stagger: 0.3
            })
    }, []);

    return (
        <div
            className="main-screen"
            style={{margin : props.margin}}
        >
            {images_buffer.map((value, index) => (
                <ImagesRow
                    row_width={"100%"}
                    margin={index === 0 ? "0% 0 0 0" : "5% 0 0 0"}
                    images_buffer={value}
                />
            ))}
        </div>
    )
}

export default MainScreen;
