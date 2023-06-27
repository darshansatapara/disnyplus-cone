import {
    configureStore,
    createSerializableStateInvariantMiddleware,
} from '@reduxjs/toolkit'
import userReducer from "../features/user/userSlice"


const serializableMiddleware = createSerializableStateInvariantMiddleware({
    serializableCheck: false,
})
export default configureStore({
    reducer: {
        user: userReducer
    },
    middlewere: [serializableMiddleware]
});
