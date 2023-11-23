import { createSlice } from '@reduxjs/toolkit'
import { picLarge } from "../data/data.js"

const initialState = {
    id: "bluePrint_1",
    form: "straight",
    path: picLarge.bluePrint_1.path
}

const blueprintSelectorReducer = createSlice({
    name: 'select',//the key has to have only this name. This "select" is the name of reducer
    initialState,//the key has to have only this name
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
            state.name = action.payload.name 
        }
    }
})

const currentBlueprint = blueprintSelectorReducer.actions
const currentProducer = producerSelectReducer.actions

const selectBlueprint =  blueprintSelectorReducer.reducer
const selectProducer = producerSelectReducer.reducer

export { selectBlueprint, selectProducer, currentBlueprint, currentProducer } 