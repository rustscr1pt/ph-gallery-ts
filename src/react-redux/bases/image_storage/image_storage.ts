import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../../mainStorage";

export const image_storage = createSlice({
    name : "image_storage",
    initialState : {
        value : [
            "/images/pres1.jpg",
            "/images/pres2.jpg",
            "/images/pres3.jpg",
            "/images/pres4.jpg",
            "/images/pres5.jpg",
            "/images/pres6.jpg",
            "/images/pres7.jpg",
            "/images/pres8.jpg",
            "/images/pres9.jpg",
            "/images/pres10.jpg"
        ],
        selected_image : "/images/pres1.jpg"
    },
    reducers : {
        changeSelectedImage(state, action : PayloadAction<string> ) {
            state.selected_image = action.payload
        },
        goToTheNextImage(state){
            const currentIndex : number = state.value.indexOf(state.selected_image);
            if (currentIndex === -1) {
                state.selected_image = "/images/pres1.jpg"
            }
            const nextIndex : number = currentIndex + 1;
            if (nextIndex < state.value.length) {
                state.selected_image = state.value[nextIndex];
            }
            else {
                state.selected_image = "/images/pres1.jpg"
            }
        }
    }
})

export const readImageStorage = (state : RootState) => {
    return state.image_storage.value;
}

export const readSelectedImage = (state : RootState) => {
    return state.image_storage.selected_image
}

export default image_storage.reducer;
