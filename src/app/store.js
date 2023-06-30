import {
    configureStore,
    createSerializableStateInvariantMiddleware,
} from '@reduxjs/toolkit'
import userReducer from "../features/user/userSlice"
import movieReducer from '../features/movie/movieSlice'

const serializableMiddleware = createSerializableStateInvariantMiddleware({
    serializableCheck: false,
})
export default configureStore({
    reducer: {
        user: userReducer,
        movie:movieReducer,
    },
    middlewere: [serializableMiddleware]
});
