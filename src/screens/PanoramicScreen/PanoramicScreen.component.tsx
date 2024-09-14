import './PanoramicScreen.style.sass';
import PanoramicImageComponent from "../PanoramicImage/PanoramicImage.component";

const PanoramicScreen = () => {
    return <div className="panoramic-screen">
        <PanoramicImageComponent background_image={"/images/image.png"}/>
    </div>
}

export default PanoramicScreen;
