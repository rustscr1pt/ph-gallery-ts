import {useAppSelector} from "../../react-redux/hooks";

export enum ScreenSideButton {
    Left,
    Right
}

export function FindComponentFunction(side : ScreenSideButton) : string | undefined {
    const componentsVector =
        useAppSelector((state) => state.image_storage.components);
    switch (side) {
        case ScreenSideButton.Left:
            return componentsVector.find(value => value.includes('arrow-circle-left.svg'))
        case ScreenSideButton.Right:
            return componentsVector.find(value => value.includes('arrow-circle-right.svg'))
    }
}