import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type { RootState } from "../../mainStorage";

export const current_display_image = createSlice({
    name : "current_display_image",
    initialState : {
        value : "/images/pres1.jpg"
    },
    reducers : {
        changeDisplayImage(state, action : PayloadAction<string> ) {
            state.value = action.payload
        }
    }
})

export const {changeDisplayImage} = current_display_image.actions;

export const readDisplayImage = (state : RootState) => {
    return state.current_display_image.value;
}

export default current_display_image.reducer;
