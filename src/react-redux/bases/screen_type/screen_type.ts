import {createSlice} from "@reduxjs/toolkit";
import ScreenType from "../../../structs/enums";
import type { RootState } from "../../mainStorage";

export const screen_type = createSlice({
    name : "screen_type",
    initialState : {
        value : ScreenType.Selector
    },
    reducers : {
        changeScreenType(state) {
            state.value = state.value === ScreenType.Selector ? ScreenType.FullView : ScreenType.Selector
        }
    }
})

export const {changeScreenType} = screen_type.actions;

export const readScreenType = (state : RootState) => {
    return state.screen_type.value;
}

export default screen_type.reducer;
