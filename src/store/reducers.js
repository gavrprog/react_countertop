import { createSlice } from '@reduxjs/toolkit'
import { picBlueprints, picLarge } from "../data/data.js"

const initialState = {
    id: "bluePrint_1",
    form: "straight",
    path: picLarge.bluePrint_1.path
}

const blueprintSelectorReducer = createSlice({
    name: 'select',//the key has to have only this name. This "select" is the name of reducer
    initialState,//the key has to have only this name
    reducers: {//the key has to have only this name
        selected: (state, action) => {      //name of the action is "selected"                      
            state.id = action.payload.id
            state.form = action.payload.form
            state.path = action.payload.path
        }
    }
})

export const { selected } = blueprintSelectorReducer.actions
export default blueprintSelectorReducer.reducer