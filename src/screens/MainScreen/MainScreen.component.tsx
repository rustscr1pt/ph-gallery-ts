import "./MainScreen.style.sass"
import ImagesRow from "../ImagesRow/ImagesRow.component";
import React from "react";
import {useAppSelector} from "../../react-redux/hooks";
import imagesForRows from "./ImagesForRows.function";

interface Props extends React.PropsWithChildren {
    margin : string
}

const MainScreen = (props : Props) => {
    let images_buffer : string[][] = imagesForRows(useAppSelector((state) => state.image_storage.value));

    return (
        <div className="main-screen" style={{margin : props.margin}}>
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
