import './ImagesRow.style.sass';
import React from "react";
import ImageViewComponent from "../../components/ImageView/ImageView.component";

interface Props extends React.PropsWithChildren {
    row_width : string,
    margin : string,
    images_buffer : string[]
}

const ImagesRow = (props : Props) => {
    return (
        <div style={{width : props.row_width, margin : props.margin}} className="images-row">
            {props.images_buffer.map((value) => (
                <ImageViewComponent width={"20%"} image_source={value}/>
            ))}
        </div>
    )
}

export default ImagesRow;
