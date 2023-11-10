import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { dataDimentions } from '../data/data'
import "../css/setDimentions.css"

let rules = [
    ["bluePrint_1", "bluePrint_2", "bluePrint_3"],
    ["bluePrint_1", "bluePrint_2", "bluePrint_3"],
    ["bluePrint_2", "bluePrint_3"],
    ["bluePrint_3"]
]

function Dimention({selectedBlueprintID}) {
    
    const filteredArray = dataDimentions.filter((_, i) => {
        let flag = false
        rules[i].forEach((elBoolean) => flag ||= selectedBlueprintID === elBoolean)
        return flag
    })

    return (
        filteredArray.map((dimentionField, index) => (
            <div key={dimentionField.id} id={dimentionField.id} className="dimension-field">
                <label>{dimentionField.labelName}&nbsp;</label>
                <span>
                    <input id={dimentionField.idInput} 
                        type="text" 
                        name={dimentionField.inputName} 
                        className="filled-field data-for-calculation" 
                        placeholder="0" 
                        min={dimentionField.min} 
                        max={dimentionField.max}/>
                    &nbsp;mm
                </span>
            </div>
        ))

    )
}


export default function SetDimention() {
    // console.log('from dimention component', useSelector((state) => state.selectBP.id))

    return (
        <>
            <div className="step-title">		
                <h2><span className="num-step-title">2</span>Размеры столешницы<span className="emergency"> в миллиметрах*</span>:</h2>
            </div>
            <div className="wrapper-3">
                <Dimention selectedBlueprintID={useSelector((state) => state.selectBP.id)}/> {/* selectBP - identifactor of appropriate state in store */}
            </div>
        </>
    )
}