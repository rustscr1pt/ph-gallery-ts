import "./MainScreen.style.sass"
import ImagesRow from "../ImagesRow/ImagesRow.component";
import React, {useRef} from "react";
import {useAppSelector} from "../../react-redux/hooks";
import imagesForRows from "./ImagesForRows.function";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

interface Props extends React.PropsWithChildren {
    margin : string
}

const MainScreen = (props : Props) => {
    let images_buffer : string[][] = imagesForRows(useAppSelector((state) => state.image_storage.value));

    const mainscreen_ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap
            .from(mainscreen_ref.current, {
                opacity: 0,
                scale: 0,
                yPercent: -50,
                duration: 0.7
            })
    }, []);

    return (
        <div
            className="main-screen"
            style={{margin : props.margin}}
            ref={mainscreen_ref}
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
