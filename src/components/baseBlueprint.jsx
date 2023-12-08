import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { currentBlueprint } from '../store/reducers.js'//the name of action
import { picBlueprints, picLarge } from "../data/data.js"
import "../css/baseBlueprint.css"

//draws 3 common blueprints with countertables
function Blueprints({click, select}) {
    return (
        picBlueprints.map((element) => (
            <div key={element.id} onClick={click} className={`type-form ${select.id === element.id && 'selected'}`} >                
                <img id={element.id} src={element.img} alt={element.alt} />
            </div>
        ))
    )
}

export default function BaseBlueprint() {
    const dispatch = useDispatch(); //create transport for "action"
    const blueprintSelected = useSelector((state) => state.selectedBP)//read the state (in this case - whole object) from the store using reducer "selectedBP" from store.js

    const clickHandler = (e) => {
        const objState = {}
        const id = e.target.id
        objState.id = id
        objState.form = picLarge[id].form
        objState.path = picLarge[id].path
        dispatch(currentBlueprint(objState))//send to store new value of state (e.target.id). In the reducer we choose the action "currentBlueprint" (we can have a big count of actions for states)
    }

    return (
    <>
        <div className="step-title">
            <h2><span className="num-step-title">1</span>Выбирите форму столешницы:</h2>
        </div>

        <div className="wrapper-1">
            <Blueprints click={clickHandler} select={blueprintSelected} />
        </div>
        
        <div className="wrapper-2">
            <img id="big-picture-cabinets" src={blueprintSelected.path} alt="blueprint of countertop"/>
        </div>
    </>
    )
}