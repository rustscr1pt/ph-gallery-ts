import './PanoramicScreen.style.sass';
import panoramicImageComponent from "../PanoramicImage/PanoramicImage.component";

const PanoramicScreen = () => {
    return <div className="panoramic-screen">{panoramicImageComponent()}</div>
}

export default PanoramicScreen;
