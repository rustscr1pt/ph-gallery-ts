import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../../mainStorage";
import axios from "axios";
import main_for_fetching from "../../../url_collection";

interface ImageStorageState {
    value : string[],
    selected_image : string,
    components : string[]
}

const initialState : ImageStorageState = {
    value : [],
    selected_image : "",
    components : []
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
                state.selected_image = ""
            }
            const nextIndex : number = currentIndex + 1;
            if (nextIndex < state.value.length) {
                state.selected_image = state.value[nextIndex];
            }
            else {
                state.selected_image = state.value[0]
            }
        },

        goToThePreviousImage(state) {
            const currentIndex : number = state.value.indexOf(state.selected_image);
            if (currentIndex === -1) {
                state.selected_image = ""
            }
            const previousIndex : number = currentIndex - 1;
            if (previousIndex >= 0) {
                state.selected_image = state.value[previousIndex];
            }
            else {
                state.selected_image = state.value[state.value.length - 1]
            }
        }
    },
    extraReducers : (builder) => {
        builder
            .addCase(fetchImages.fulfilled, (state, action : PayloadAction<string[]>) => {
                state.value = action.payload
            })
            .addCase(fetchComponents.fulfilled, (state, action : PayloadAction<string[]>) => {
                state.components = action.payload
            })
    }
})

export const fetchImages = createAsyncThunk(
    'image_storage/fetchImages',
    async () => {
        const response = await axios
            .get(`${main_for_fetching}/image-plugin/extract_images/`);
        return response.data.extracted as string[]
    }
)

export const fetchComponents = createAsyncThunk(
    'image_storage/fetchComponents',
    async () => {
        const response = await axios
            .get(`${main_for_fetching}/image-plugin/extract_buttons/`);
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
