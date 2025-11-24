import React from 'react'
import "../css/calculation.css"

export default function Calculation() {
    return (
        <>
            <div className="step-title">
                <h2><span className="num-step-title">6</span>Расчет:</h2>
            </div>
            <div className="counter-grid">
                {/* <div className="choose-currency">
                    <input id="uah" type="radio" name="count" className="data-for-calculation" checked/>
                    <label htmlFor="uah">грн</label>
                </div>
                <div className="choose-currency">
                    <input id="dollar" type="radio" name="count" className="data-for-calculation"/>
                    <label htmlFor="dollar">$</label>
                </div><div></div>
                <div>
                    <input id="answer" type="text" name="count-answer"/>
                    <label htmlFor="answer">$ / грн</label>
                </div>	 */}
            </div>
        </>
    )
}