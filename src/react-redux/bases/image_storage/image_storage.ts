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
        ]
    },
    reducers : {}
})

export const readImageStorage = (state : RootState) => {
    return state.image_storage.value;
}

export default image_storage.reducer;
