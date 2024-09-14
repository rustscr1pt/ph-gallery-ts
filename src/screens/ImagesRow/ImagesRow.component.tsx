import './ImagesRow.style.sass';
import React from "react";
import ImageViewComponent from "../../components/ImageView/ImageView.component";

interface Props extends React.PropsWithChildren {
    row_width : string,
    margin : string,
}

const ImagesRow = (props : Props) => {
    return <div style={{width : props.row_width, margin : props.margin}} className="images-row">
        <ImageViewComponent width={"20%"} image_source={"/images/image.png"}/>
        <ImageViewComponent width={"20%"} image_source={"/images/image.png"}/>
        <ImageViewComponent width={"20%"} image_source={"/images/image.png"}/>
    </div>
}

export default ImagesRow;
