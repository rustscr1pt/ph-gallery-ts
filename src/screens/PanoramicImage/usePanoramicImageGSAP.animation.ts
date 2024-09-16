import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {useAppSelector} from "../../react-redux/hooks";

export const usePanoramicImageGSAPAnimation = () => {

    gsap.registerPlugin(useGSAP);

    const div_ref = useRef<HTMLDivElement>(null);
    const left_img_ref = useRef<HTMLImageElement>(null);
    const right_img_ref = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        const timeline = gsap.timeline();
        timeline
            .from(div_ref.current, {
                yPercent : -30,
                opacity : 0
            })
            .from([left_img_ref.current, right_img_ref.current], {
                yPercent : -50,
                opacity: 0,
                duration: 0.2
            })

    }, [useAppSelector((state) => state.image_storage.selected_image)]);

    return {div_ref, left_img_ref, right_img_ref}
}