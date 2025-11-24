import { createSlice } from '@reduxjs/toolkit'
import { picLarge } from "../data/data.js"

const formSelectorReducer = createSlice({
    name: 'Select tabletop',//the key will in Redux shown when the tabletop is choosed
    initialState: {
        id: "bluePrint_1",
        form: "straight",
        path: picLarge.bluePrint_1.path
    },
    reducers: {
        currentForm: (state, action) => { //name of the ACTION is "currentForm". tWill in Redux shown when the tabletop is choosed                     
            state.id = action.payload.id 
            state.form = action.payload.form
            state.path = action.payload.path
        }
    }
})

const producerSelectReducer = createSlice({
    name: 'Select producer',
    initialState: {name: 'avant'},
    reducers: {
        currentProducer: (state, action) => {            
            state.name = action.payload 
        }
    }
})

// for selecting, reducers
const selectForm =  formSelectorReducer.reducer
const selectProducer = producerSelectReducer.reducer

// for dispatch, actions
const {currentForm} = formSelectorReducer.actions // it is important - braces
const {currentProducer} = producerSelectReducer.actions

export { selectForm, currentForm, selectProducer, currentProducer } 