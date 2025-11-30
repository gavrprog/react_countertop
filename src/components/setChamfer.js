import React, { useEffect, useState } from "react";
import axios from 'axios'
import "../css/setChamfer.css"

function Chamfer({arrayChamfer, handleClick, currentChamfer}) {
    
    return (
        arrayChamfer
        .filter((chamfer) => chamfer.view !== "")
        .map((chamfer) => (
                <div key={chamfer.process}>
                    <label htmlFor={chamfer.process}>
                        <img src={'http://interkam.od.ua/calculator/img/chamfers/' + chamfer.view} alt={chamfer.process}/>
                    </label>
                    <input 
                        id={chamfer.process}
                        type="radio"
                        name="chamfer"
                        value={chamfer.process}
                        checked={currentChamfer === chamfer.process}
                        onChange={handleClick} 
                    />
                </div>
            )

        )
    )
}

export default function SetChamfer() {
    const [arrayChamfer, setArrayChamfer] = useState([])
    const [currentChamfer, setCurrentChamfer] = useState("chamferE")

    useEffect(() => {
        axios.get('http://localhost:3001/api/processingPrice')
        .then((response) => setArrayChamfer(response.data))
        .catch((err) => alert('Error when executed AXIOS in request the chamfer. The error is:', err))
        }, []
    )

    const handleClick = (event) => {
        setCurrentChamfer(event.target.value)
        console.log(currentChamfer)
    }

    return (
        <>
            <div className="step-title">
                <h2><span className="num-step-title">4</span>Выбор фаски:</h2>
            </div>
            <div className="edges">
                <Chamfer arrayChamfer={arrayChamfer} handleClick={handleClick} currentChamfer={currentChamfer}/>
            </div>
        </>
    )
}