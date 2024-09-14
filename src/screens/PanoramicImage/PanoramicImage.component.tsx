import './PanoramicImage.style.sass';
import React from "react";
import ArrayButton from "../../components/ArrayButton/ArrayButton";

interface Props extends React.PropsWithChildren {
    background_image : string
}

const PanoramicImage = (props : Props) => {
    return <div
        style={{
            backgroundImage : `url("${props.background_image}")`
        }}
        className="panoramic-image">
        {
            ArrayButton(
                {
                    grid_columns : "1 / 2",
                    grid_rows : "3 / 4",
                    width : "100%",
                    source_image : "/images/arrow-circle-left.svg"
                }
            )
        }
        {
            ArrayButton(
                {
                    grid_columns : "4 / 5",
                    grid_rows : "3 / 4",
                    width : "100%",
                    source_image : "/images/arrow-circle-right.svg"
                }
            )
        }
    </div>
}

export default PanoramicImage;
