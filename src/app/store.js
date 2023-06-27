import {
    configureStore,
    createSerializableStateInvariantMiddleware,
    
  } from '@reduxjs/toolkit'
  const serializableMiddleware = createSerializableStateInvariantMiddleware({
    serializableCheck: false,
  })
export default configureStore({
    reducer: {},
    middlewere: [serializableMiddleware]
});
