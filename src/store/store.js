import { configureStore } from '@reduxjs/toolkit'
import selectReducer from './reducers.js'

const store =  configureStore({
    reducer: {
        selectBP: selectReducer
    }
})

export default store