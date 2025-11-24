import { configureStore } from '@reduxjs/toolkit'
import { selectForm, selectProducer } from './reducers.js'

const store =  configureStore({
    reducer: {
        formOfTabletop: selectForm,
        stoneProducer: selectProducer
    }
})

export default store