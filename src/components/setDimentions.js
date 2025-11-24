import { useFormContext } from 'react-hook-form';
import "../css/setDimentions.css"

function Dimention({allShapes, dimentions, selectedShape}) {
    let dimentionFields = []
    const numberDimentions = allShapes.filter((currentShape) => currentShape.shape === selectedShape)[0]?.numberDimentions
    for(let i = 0; i < numberDimentions; i++){
        dimentionFields.push(dimentions[i])
    }

    return (
        dimentionFields.map((dimentionField) => (
            <div key={dimentionField.fieldId} id={dimentionField.fieldI} className="dimension-field">
                <label>{dimentionField.labelName}&nbsp;</label>
                <span>
                    <input id={dimentionField.inputId} 
                        type="number" 
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

export default function SetDimention({allShapes, initDimentions}) {
    const { watch } = useFormContext();// receive from App the context alle Form
    const selected = watch("shape"); // текущее выбранное значение на первом шаге - выбор формы

    return (
        <>
            <div className="step-title">		
                <h2><span className="num-step-title">2</span>Размеры столешницы<span className="emergency"> в миллиметрах*</span>:</h2>
            </div>
            <div className="wrapper-3">
                <Dimention allShapes={allShapes} dimentions={initDimentions} selectedShape={selected}/>
            </div>
        </>
    )
}