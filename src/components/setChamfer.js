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
                            onChange={handleClick} />
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
                {/* <div>
                    <label htmlFor="chamfer-E"><img src="../img/edge1.jpg" alt=""/></label>
                    <input id="chamfer-E" type="radio" name="chamfer" className="data-for-calculation" checked value="chamferE"/>
                </div>
                <div>
                    <label htmlFor="chamfer-corner"><img src="../img/edge2.jpg" alt=""/></label>
                    <input id="chamfer-corner" type="radio" name="chamfer" className="data-for-calculation" value="chamferCorner"/>
                </div>
                <div>
                    <label htmlFor="chamfer-A"><img src="../img/edge3.jpg" alt=""/></label>
                    <input id="chamfer-A" type="radio" name="chamfer" className="data-for-calculation" value="chamferA"/>
                </div>
                <div>
                    <label htmlFor="chamfer-V"><img src="../img/edge4.jpg" alt=""/></label>
                    <input id="chamfer-V" type="radio" name="chamfer" className="data-for-calculation" value="chamferV"/>
                </div>
                <div>
                    <label htmlFor="chamfer-H"><img src="../img/edge5.jpg" alt=""/></label>
                    <input id="chamfer-H" type="radio" name="chamfer" className="data-for-calculation" value="chamferH"/>
                </div>
                <div>
                    <label htmlFor="chamfer-O"><img src="../img/edge5.jpg" alt=""/></label>
                    <input id="chamfer-O" type="radio" name="chamfer" className="data-for-calculation" value="chamferO"/>
                </div>
                <div>
                    <label htmlFor="chamfer-duck"><img src="../img/edge5.jpg" alt=""/></label>
                    <input id="chamfer-duck" type="radio" name="chamfer" className="data-for-calculation" value="сhamferDuck"/>
                </div> */}
            </div>
        </>
    )
}