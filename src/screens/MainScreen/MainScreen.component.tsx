import "./MainScreen.style.sass"
import ImagesRow from "../ImagesRow/ImagesRow.component";
import React from "react";

interface Props extends React.PropsWithChildren {
    margin : string
}

const MainScreen = (props : Props) => {
    return <div className="main-screen" style={{margin : props.margin}}>
        {ImagesRow({row_width : "100%", margin : "0% 0 0 0"})}
        {ImagesRow({row_width : "100%", margin : "5% 0 0 0"})}
        {ImagesRow({row_width : "100%", margin : "5% 0 0 0"})}
    </div>
}

export default MainScreen;
