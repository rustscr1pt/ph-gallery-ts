import './PanoramicScreen.style.sass';
import panoramicImageComponent from "../PanoramicImage/PanoramicImage.component";

const PanoramicScreen = () => {
    return <div className="panoramic-screen">
        {panoramicImageComponent({background_image : "/images/image.png"})}
    </div>
}

export default PanoramicScreen;
