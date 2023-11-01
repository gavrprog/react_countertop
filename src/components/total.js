import React from 'react'
import "../css/total.css"

export default function Total() {
    return (
        <>
            <div className="step-title">
                <h2><span className="num-step-title">6</span>Расчет:</h2>
            </div>
            <div className="counter-grid">
                <div className="choose-currency">
                    <input id="uah" type="radio" name="count" className="data-for-calculation" checked/>
                    <label for="uah">грн</label>
                </div>
                <div className="choose-currency">
                    <input id="dollar" type="radio" name="count" className="data-for-calculation"/>
                    <label for="dollar">$</label>
                </div><div></div>
                <div>
                    <input id="answer" type="text" name="count-answer"/>
                    <label for="answer">$ / грн</label>
                </div>	
            </div>
        </>
    )
}