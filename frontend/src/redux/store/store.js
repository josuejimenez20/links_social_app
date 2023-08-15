import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { AuthReducer } from '../slices/auth/authSliceIndex';
import { PostsReducer } from '../slices/posts/postsSlicesIndex';
import { MessagesReducer } from '../slices/messages/messageSliceIndex';

const combineReducer = combineReducers({
    auth: AuthReducer,
    posts: PostsReducer,
    messages: MessagesReducer
});

const rootReducer = (state, action) => {
    return combineReducer(state, action);
}

export const store = configureStore({
    reducer: rootReducer,
})