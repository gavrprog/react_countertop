import { useFormContext, get } from 'react-hook-form';
import "../css/setDimentions.css"

function Dimention({allShapes, dimentions, selectedShape}) {
    const { register, formState: { errors } } = useFormContext()


    // count how mauch fields must be displayed and collected in array appropriate amount objects
    let dimentionFields = []
    const numberDimentions = allShapes.filter((currentShape) => currentShape.shape === selectedShape)[0]?.numberDimentions
    for(let i = 0; i < numberDimentions; i++){
        dimentionFields.push(dimentions[i])
    }

    return (
        <>
            { dimentionFields.map((dimentionField) => {
                const error = get(errors,`dimentions.${dimentionField.inputName}`);
                return(
                    <div key={dimentionField.fieldId} id={dimentionField.fieldId} className="dimension-field">
                        <label className={error ? "input-error" : undefined}>{dimentionField.labelName}&nbsp;</label>
                        <span>
                            <input id={dimentionField.inputId} 
                                type="number" 
                                min={dimentionField.min} 
                                max={dimentionField.max}
                                {...register(`dimentions.${dimentionField.inputName}`,{ required: `Укажите размер: ${dimentionField.labelName}`})}/>
                            &nbsp;mm
                        </span>
                    </div>
                )
            })}
        </>


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
            <div className="description">
                <p>Допустимый размер ширины столешницы от 560мм до 650мм</p>
                <p>Допустимый размер длины столешницы от 1000мм до 6000мм</p>
            </div>
            <div className="wrapper-3">
                <Dimention allShapes={allShapes} dimentions={initDimentions} selectedShape={selected}/>
            </div>
        </>
    )
}