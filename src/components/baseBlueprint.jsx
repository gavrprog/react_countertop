
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selected } from '../store/reducers'//the name of action
import { picBlueprints } from "../data/data.js"
import "../css/baseBlueprint.css"

// const initialValue = {
//     id: "bluePrint-1",
//     form: "straight",
//     path: picBlueprints[0].source
// }

function Blueprints({click, select}) {
    return (
        Object.values(picBlueprints).map((element, index) => (
            <div key={Object.keys(picBlueprints)[index]} onClick={click} className={`type-form ${select.id === Object.keys(picBlueprints)[index] && 'selected'}`}>
                <img id={Object.keys(picBlueprints)[index]} src={element.img} alt={element.alt}/>
            </div>
        ))
    )
}

export default function BaseBlueprint() {
    const dispatch = useDispatch(); //create transport for "action"
    const blueprintSelected = useSelector((state) => state.selectBP)//read the state (in this case - whole object) from the store using reducer "selectBP" from store.js
    //const [blueprintSelected, setBlueprintSelected] = useState(initialValue)

    const clickHandler = (e) => {
        dispatch(selected(e.target.id))//send to store new value of state (e.target.id). In the reducer we choose the action "selected" (we can have a big count of actions for states)
        //setBlueprintSelected({...initialValue, id: idBlueprint, form: dataForm, path: dataSource})
    }

    return (
    <>
        <div className="step-title">
            <h2><span className="num-step-title">1</span>Выбирите форму столешницы:</h2>
        </div>

        <div className="wrapper-1">
            <Blueprints click={clickHandler} select={blueprintSelected} />
            {/* <input id="countertop-view" name="countertopForm" type="text" className="data-for-calculation hidden-data" value={blueprintSelected.form}/> */}
        </div>
        
        <div className="wrapper-2">
            <img id="big-picture-cabinets" src={blueprintSelected.path} alt="blueprint of countertop"/>
        </div>
    </>
    )
}