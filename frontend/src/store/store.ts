import {Action, configureStore} from "@reduxjs/toolkit";
import {listMusiciansSlice} from "./slices/slice";

const store = configureStore({
    reducer: listMusiciansSlice.reducer,

})

type StoreRootType = ReturnType<typeof store.getState>

export default store;

