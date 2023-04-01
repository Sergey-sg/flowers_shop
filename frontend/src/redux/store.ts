import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './slice/category/category.slice'
import recommendationSlice from './slice/recommendation/recommendation.slice'
import flowerSlice from './slice/flower/flower.slice'


export const store = configureStore({
  reducer: {
    categories: categorySlice,
    recommendations: recommendationSlice,
    flowers: flowerSlice,
  },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch