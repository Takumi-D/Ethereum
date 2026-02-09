import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getData from "../../service/get.api.ts";
import type { FetchData, State } from "../type/type.ts";

const initialState: State = {
    data: [],
    loading: false,
    error: null
}

export const fetchData  = createAsyncThunk<FetchData[], void>(
    "data/fetchData",
    async () => {
        return await getData();
    }
);

const mainSlice = createSlice({
    name: "main",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Ошибка при загрузке данных";
        })
    }
});

 export default mainSlice.reducer;