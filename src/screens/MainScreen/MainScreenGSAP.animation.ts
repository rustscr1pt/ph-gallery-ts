import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {useAppSelector} from "../../react-redux/hooks";

export const MainScreenGSAPAnimation = () => {
    const target = useAppSelector((state) => state.image_storage.value);
    useGSAP(() => {
        gsap
            .from(document.querySelectorAll('.image-view-div'), {
                opacity: 0,
                scale: 0,
                yPercent: -50,
                duration: 0.3,
                stagger: 0.3
            })
    }, [target.length]);
}