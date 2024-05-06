import { createSlice } from "@reduxjs/toolkit";

const initialState: { sidebar: number } = {
    sidebar: 1,
};

const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        // Define your reducer functions here
        // For example:
        setSidebar(state, action) {
            console.log("payload: ", action.payload);
            state.sidebar = action.payload
        },
    }
});

export const { setSidebar } = projectSlice.actions;
export default projectSlice.reducer;
