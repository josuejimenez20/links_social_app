import { combineReducers } from "redux";

import { postsSlice } from "./postsGetSlices";

export * from './postsGetSlices';

export const PostsReducer = combineReducers({
    get: postsSlice.reducer
});