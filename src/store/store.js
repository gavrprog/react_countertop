import { configureStore } from '@reduxjs/toolkit'
import selectReducer from './reducers.js'

const store =  configureStore({
    reducer: {
        select: selectReducer
    }
})

export default store