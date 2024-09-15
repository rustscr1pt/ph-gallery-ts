import {configureStore} from '@reduxjs/toolkit';
import {screen_type} from "./bases/screen_type/screen_type";
import {image_storage} from "./bases/image_storage/image_storage";
import {current_display_image} from "./bases/current_display_image/current_display_image";


const application = configureStore({
    reducer : {
        screen_type : screen_type.reducer,
        image_storage : image_storage.reducer,
        current_display_image : current_display_image.reducer
    }
})

export default application;

export type RootState = ReturnType<typeof application.getState>
export type AppDispatch = typeof application.dispatch;
