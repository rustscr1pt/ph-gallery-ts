import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

export const MainScreenGSAPAnimation = () => {
    useGSAP(() => {
        const timeline = gsap.timeline();
        timeline
            .from(document.querySelectorAll('.image-view-div'), {
                opacity: 0,
                scale: 0,
                yPercent: -50,
                duration: 0.3,
                stagger: 0.3
            })
    }, []);
}