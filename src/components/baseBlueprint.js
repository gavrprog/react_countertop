import React from 'react'
import "../css/baseBlueprint.css"

export default function BaseBlueprint() {
    return (
    <>
        <div className="step-title">
            <h2><span className="num-step-title">1</span>Выбирите форму столешницы:</h2>
        </div>
        <div className="wrapper-1">
            <div className="type-form selected" data-form="straight">
            <img id="bluePrint-1" src="../img/Screenshot_1.jpg" alt="Прямая столешница" data-source="assets/img/line1.jpg"/>
        </div>
            <div className="type-form" data-form="corner">
            <img id="bluePrint-2" src="../img/Screenshot_2.jpg" alt="Г-образная столешница" data-source="assets/img/line2.jpg"/>
        </div>
            <div className="type-form" data-form="multiconer">
            <img id="bluePrint-3" src="../img/Screenshot_3.jpg" alt="П-образная столешница" data-source="assets/img/line3.jpg"/>
        </div>
            <input id="countertop-view" name="countertopForm" type="text" className="data-for-calculation hidden-data" value="straight"/>
        </div>
    </>
    )
}