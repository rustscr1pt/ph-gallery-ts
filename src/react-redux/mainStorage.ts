import {configureStore} from '@reduxjs/toolkit';
import {screen_type} from "./bases/screen_type/screen_type";


const application = configureStore({
    reducer : {
        screen_type : screen_type.reducer
    }
})

export default application;

export type RootState = ReturnType<typeof application.getState>
export type AppDispatch = typeof application.dispatch;
