import { configureStore } from '@reduxjs/toolkit'
import { selectBlueprint, selectProducer } from './reducers.js'

const store =  configureStore({
    reducer: {
        selectedBP: selectBlueprint,
        selectedProducer: selectProducer
    }
})

export default store