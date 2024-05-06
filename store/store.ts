// store.ts
import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './reducers/ProjectSlice'

export type RootState = {
    project: { sidebar: number };
}

const store = configureStore({
    reducer: {
        // Include your projectSlice reducer here
        project: projectReducer
    }
})

export default store;
