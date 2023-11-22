<<<<<<< HEAD
import { configureStore} from '@reduxjs/toolkit'
import userReducer from '.user/userSlice'
=======
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userslice'
>>>>>>> 93256698aff53974234a8a56aaa7aa89214a6776

export const store = configureStore({
    reducer: { user: userReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})