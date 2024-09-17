import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../../mainStorage";
import axios from "axios";

interface ImageStorageState {
    value : string[],
    selected_image : string,
}

const initialState : ImageStorageState = {
    value : [],
    selected_image : ""
}

export const image_storage = createSlice({
    name : "image_storage",
    initialState,
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
        },

        goToThePreviousImage(state) {
            const currentIndex : number = state.value.indexOf(state.selected_image);
            if (currentIndex === -1) {
                state.selected_image = "/images/pres1.jpg"
            }
            const previousIndex : number = currentIndex - 1;
            if (previousIndex >= 0) {
                state.selected_image = state.value[previousIndex];
            }
            else {
                state.selected_image = "/images/pres1.jpg"
            }
        }
    },
    extraReducers : (builder) => {
        builder
            .addCase(fetchImages.fulfilled, (state, action : PayloadAction<string[]>) => {
                state.value = action.payload
            })
    }
})

export const fetchImages = createAsyncThunk(
    'image_storage/fetchImages',
    async () => {
        const response = await axios
            .get('https://new-api.space/image-plugin/extract_images/');
        console.log(response.data.extracted);
        return response.data.extracted as string[]
    }
)

export const readImageStorage = (state : RootState) => {
    return state.image_storage.value;
}

export const readSelectedImage = (state : RootState) => {
    return state.image_storage.selected_image
}

export default image_storage.reducer;
