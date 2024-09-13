import "./main_screen.style.sass"
import images_row from "../images_row/images_row.component";
import React from "react";

interface Props extends React.PropsWithChildren {
    margin : string
}

const main_screen = (props : Props) => {
    return <div className="main-screen" style={{margin : props.margin}}>
        {images_row({row_width : "100%", margin : "0% 0 0 0"})}
        {images_row({row_width : "100%", margin : "5% 0 0 0"})}
        {images_row({row_width : "100%", margin : "5% 0 0 0"})}
    </div>
}

export default main_screen;
