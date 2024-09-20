import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {useAppDispatch} from "../../react-redux/hooks";
import {RefObject, useRef} from "react";
import {screen_type} from "../../react-redux/bases/screen_type/screen_type";

export const useExitPanoramicImageGSAPAnimation = (
    isAnimatedExit : boolean,
    left_img_ref : RefObject<HTMLImageElement>,
    right_img_ref : RefObject<HTMLImageElement>
) => {
    gsap.registerPlugin(useGSAP);
    const dispatch = useAppDispatch();
    const exitImgRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        if (isAnimatedExit) {
            const timeline = gsap.timeline({
                onComplete : () => {
                    dispatch(screen_type.actions.changeScreenType())
                }});
            timeline
                .to(exitImgRef.current, {
                    yPercent: 30,
                    opacity : 0
                })
                .to(left_img_ref.current, {
                    xPercent: -50,
                    opacity : 0,
                    duration: 0.4
                }, "marker")
                .to(right_img_ref.current, {
                    xPercent: 50,
                    opacity : 0,
                    duration: 0.4
                }, "marker")
        }
    }, [isAnimatedExit]);

    return exitImgRef
}