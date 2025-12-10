import React from 'react'
import "../css/calculation.css"

export default function Calculation({result}) {


    return (
        <>
            <div className="step-title">
                <h2><span className="num-step-title">6</span>Расчет:</h2>
            </div>
            <div>
                <h4></h4>
            </div>
            <div className="counter-grid">
                {/* <div className="choose-currency">
                    <input id="uah" type="radio" name="count" className="data-for-calculation" checked/>
                    <label htmlFor="uah">грн</label>
                </div>
                <div className="choose-currency">
                    <input id="dollar" type="radio" name="count" className="data-for-calculation"/>
                    <label htmlFor="dollar">$</label>
                </div><div></div> */}
                <div>
                    <label htmlFor="answer-hrn">Стоимость в грн.</label>                    
                    <input id="answer-hrn" type="text" name="count-answer" value={result * 42.5}/>
                </div>
                <div>
                    <label htmlFor="answer-dol">Стоимость в дол.</label>
                    <input id="answer-dol" type="text" name="count-answer" value={result}/>
                </div>
                <button type="submit">РАСЧИТАТЬ</button>	
            </div>
        </>
    )
}