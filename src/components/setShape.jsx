import React, { useState, useEffect } from 'react'
import { useFormContext } from 'react-hook-form';
import axios from 'axios'
import "../css/setShape.css"

const PATH_WEB = 'https://interkam.od.ua/calculator/img'



export default function SetShape({allShapes}) {


    const { register, watch } = useFormContext();// receive from App the context alle Form
    const selected = watch("shape"); // текущее выбранное значение



    return (
    <>
        <div className="step-title">
            <h2><span className="num-step-title">1</span>Выбирите форму столешницы:</h2>
        </div>

            <div className="wrapper-1">
            {allShapes.map((currentShape) => (
                <div key={currentShape.id} className={`type-form ${selected === currentShape.shape && 'selected'}`} >  
                    <label>
                        <input type="radio" {...register('shape')} value={currentShape.shape}/>
                        <img id={currentShape.shape} src={PATH_WEB + currentShape.drawing} alt={currentShape.alt} />
                    </label>    
                </div>
            ))}
        </div>


        
        <div className="wrapper-2">
            <img id="big-picture-cabinets" src={PATH_WEB + allShapes.filter((currentShape) => currentShape.shape === selected)[0]?.view} alt="blueprint of toptable"/>
        </div>
    </>
    )
}