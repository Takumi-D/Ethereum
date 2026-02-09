import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../store/reducers/main.reducer.ts"

const store = configureStore({
    reducer: {
        main: mainReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;