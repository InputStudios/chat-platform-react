import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import  conversationReducer from './conversationSlice';
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = configureStore({
	reducer: {
		conversation: conversationReducer,
	},
	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: USersState}
export type AppDispatch = typeof store.dispatch;
