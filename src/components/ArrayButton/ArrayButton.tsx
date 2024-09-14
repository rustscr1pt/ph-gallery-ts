import React from "react";
import './ArrayButton.style.sass';
interface Props extends React.PropsWithChildren {
    grid_columns : string,
    grid_rows : string
    width : string,
    source_image : string
}


const ArrayButton = (props : Props) => {
    return <div
        style={
            {
                gridColumn: props.grid_columns,
                gridRow: props.grid_rows,
                width: props.width,
                cursor: "pointer"
            }
        }
        className="array-button-div"
    >
        <img style={
            {
                width: "80%",
            }
        } src={props.source_image}></img>
    </div>
}

export default ArrayButton;
