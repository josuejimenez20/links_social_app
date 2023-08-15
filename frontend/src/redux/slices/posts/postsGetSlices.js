import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    posts: null
};

export const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        fetchGetPosts: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchGetPostsSuccess: (state, action) => {
            state.loading = false,
                state.error = false,
                state.success = true;
            state.posts = action.payload;
        },
        fetchGetPostsFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchGetPosts,
    fetchGetPostsSuccess,
    fetchGetPostsFailure
} = postsSlice.actions;