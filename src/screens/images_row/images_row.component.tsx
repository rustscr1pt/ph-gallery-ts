import './images_row.style.sass';
import React from "react";
import image_viewComponent from "../../components/image_view/image_view.component";

interface Props extends React.PropsWithChildren {
    row_width : string,
    margin : string,
}

const images_row = (props : Props) => {
    return <div style={{width : props.row_width, margin : props.margin}} className="images-row">
        {image_viewComponent({width : "20%"})}
        {image_viewComponent({width : "20%"})}
        {image_viewComponent({width : "20%"})}
    </div>
}

export default images_row;
