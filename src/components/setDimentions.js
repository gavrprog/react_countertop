import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { dataDimentions } from '../data/data'
import "../css/setDimentions.css"

let rules = {
    bluePrint_1: [],
    bluePrint_2: ["c_dimension"],
    bluePrint_3: ["c_dimension", "d_dimension"]
}

function Dimention({state}) {
    
    return (
        Object.values(dataDimentions).map((dimentionField, index) => (
            <div key={Object.keys(dataDimentions)[index]} id={Object.keys(dataDimentions)[index]} className="dimension-field">
                <label>{dimentionField.labelName}&nbsp;</label>
                <span>
                    <input id={dimentionField.id} type="text" name={dimentionField.inputName} className="filled-field data-for-calculation" placeholder="0" min={dimentionField.min} max={dimentionField.max}/>
                    &nbsp;mm
                </span>
            </div>
        ))

    )
}


export default function SetDimention() {
    console.log('from dimention component', useSelector((state) => state.selectBP.id))
    const selectBluprint = useSelector((state) => state.selectBP.id)
    return (
        <>
            <div className="step-title">		
                <h2><span className="num-step-title">2</span>Размеры столешницы<span className="emergency"> в миллиметрах*</span>:</h2>
            </div>
            <div className="wrapper-3">
                <Dimention state={selectBluprint}/>
            </div>
        </>
    )
}