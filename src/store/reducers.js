import { createSlice } from '@reduxjs/toolkit'
import { picBlueprints } from "../data/data.js"

const initialState = {
    id: "bluePrint_1",
    form: "straight",
    path: picBlueprints.bluePrint_1.source
}

const blueprintSelectorReducer = createSlice({
    name: 'select',//the key has to have only this name. This "select" is the name of reducer
    initialState,//the key has to have only this name
    reducers: {//the key has to have only this name
        selected: (state, action) => {                        //name of the action is "selected"
            const id = action.payload
            state.id =  id
            state.form = picBlueprints[id].form
            state.path = picBlueprints[id].source
        }
    }
})

export const { selected } = blueprintSelectorReducer.actions
export default blueprintSelectorReducer.reducer