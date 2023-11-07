import React from 'react'
import "../css/setDimentions.css"

export default function SetDimention() {
    return (
        <>
            <div className="step-title">		
                <h2><span className="num-step-title">2</span>Размеры столешницы<span className="emergency"> в миллиметрах*</span>:</h2>
            </div>
            <div className="wrapper-3">
                <div id="a-dimension" className="dimension-field name-of-field">
                    <label>Ширина столешницы: A =&nbsp;</label>
                    <span>
                        <input id="a-dimension-field" type="text" name="length_A" className="filled-field data-for-calculation" placeholder="0" min="560" max="650"/>
                        mm
                    </span>
                </div>
                <div></div>
                <div id="b-dimension" className="dimension-field name-of-field">
                    <label>Длина столешницы: B =&nbsp;</label>
                    <span>
                        <input id="b-dimension-field" type="text" name="length_B" className="filled-field data-for-calculation" placeholder="0" min="1000" max="6000"/>
                        mm
                    </span>
                </div>
                <div id="c-dimension" className="dimension-field invisible">
                    <label>C =&nbsp;</label>
                    <span>
                        <input id="c-dimension-field" type="text" name="length_C" className="filled-field data-for-calculation" placeholder="0" min="1000" max="6000"/>
                        mm
                    </span>
                </div>
                <div id="d-dimension" className="dimension-field invisible">
                    <label>D =&nbsp;</label>
                    <span>
                        <input id="d-dimension-field" type="text" name="length_D" className="filled-field data-for-calculation" placeholder="0" min="1000" max="6000"/>
                        mm
                    </span>
                </div>
            </div>
        </>
    )
}