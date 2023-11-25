import { createSlice } from '@reduxjs/toolkit'
import { picLarge } from "../data/data.js"

const blueprintSelectorReducer = createSlice({
    name: 'select',//the key has to have only this name. This "select" is the name of reducer
    initialState: {//the key has to have only this name
        id: "bluePrint_1",
        form: "straight",
        path: picLarge.bluePrint_1.path
    },
    reducers: {//the key has to have only this name
        currentBlueprint: (state, action) => {      //name of the action is "currentBlueprint"                      
            state.id = action.payload.id 
            state.form = action.payload.form
            state.path = action.payload.path
        }
    }
})

const producerSelectReducer = createSlice({
    name: 'selectProducer',
    initialState: {name: 'avant'},
    reducers: {
        currentProducer: (state, action) => {            
            state.name = action.payload 
        }
    }
})

const selectBlueprint =  blueprintSelectorReducer.reducer
const selectProducer = producerSelectReducer.reducer

const {currentBlueprint} = blueprintSelectorReducer.actions // it is important - braces
const {currentProducer} = producerSelectReducer.actions

export { selectBlueprint, currentBlueprint, selectProducer, currentProducer } 