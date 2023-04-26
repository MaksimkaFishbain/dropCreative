import {createSlice} from "@reduxjs/toolkit";
import {Musicians} from "../../types/types";

const initialState:Musicians = []

export const listMusiciansSlice = createSlice({
    name:'listMusicians',
    initialState,
    reducers:{

    }
})