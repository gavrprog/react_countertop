import React from "react";
import "../css/setChamfer.css"

export default function SetColor() {
    return (
        <>
            <div className="step-title">
                <h2><span className="num-step-title">4</span>Выбор фаски:</h2>
            </div>
            <div className="edges">
                <div>
                    <label for="chamfer-E"><img src="../img/edge1.jpg" alt=""/></label>
                    <input id="chamfer-E" type="radio" name="chamfer" className="data-for-calculation" checked value="chamferE"/>
                </div>
                <div>
                    <label for="chamfer-corner"><img src="../img/edge2.jpg" alt=""/></label>
                    <input id="chamfer-corner" type="radio" name="chamfer" className="data-for-calculation" value="chamferCorner"/>
                </div>
                <div>
                    <label for="chamfer-A"><img src="../img/edge3.jpg" alt=""/></label>
                    <input id="chamfer-A" type="radio" name="chamfer" className="data-for-calculation" value="chamferA"/>
                </div>
                <div>
                    <label for="chamfer-V"><img src="../img/edge4.jpg" alt=""/></label>
                    <input id="chamfer-V" type="radio" name="chamfer" className="data-for-calculation" value="chamferV"/>
                </div>
                <div>
                    <label for="chamfer-H"><img src="../img/edge5.jpg" alt=""/></label>
                    <input id="chamfer-H" type="radio" name="chamfer" className="data-for-calculation" value="chamferH"/>
                </div>
                <div>
                    <label for="chamfer-O"><img src="../img/edge5.jpg" alt=""/></label>
                    <input id="chamfer-O" type="radio" name="chamfer" className="data-for-calculation" value="chamferO"/>
                </div>
                <div>
                    <label for="chamfer-duck"><img src="../img/edge5.jpg" alt=""/></label>
                    <input id="chamfer-duck" type="radio" name="chamfer" className="data-for-calculation" value="сhamferDuck"/>
                </div>
            </div>
        </>
    )
}