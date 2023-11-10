import React from 'react'
import "../css/additionally.css"

export default function Additionally() {

    return (
        <>
            <div className="step-title">
                <h2><span className="num-step-title">5</span>Дополнительные услуги:</h2>
            </div>
            <div  className="additionally">
                <div>
                    <input id="add-washing" type="checkbox" name="washing" className="data-for-calculation" value="0"/>
                    <label htmlFor="add-washing">Монтаж мойки под столешницу"</label>
                </div>		
                <div>
                    <input id="add-montage" type="checkbox" name="montage" className="data-for-calculation" value="0"/>
                    <label htmlFor="add-montage">Монтаж</label>
                </div>
                <div>
                    <input id="add-delivery" type="checkbox" name="delivery" className="data-for-calculation" value="0"/>
                    <label htmlFor="add-delivery">Доставка</label>
                </div>
            </div>
        </>
    )
}