import React from "react";
import "../css/setColor.css"

export default function SetColor() {
    return (
        <>
            <div className="step-title">
                <h2><span className="num-step-title">3</span>Производитель и цвет камня:</h2>
            </div>
            <div className="wrapper-4">
                <div id="list-producers" className="producers">
                    <div className="wrapp-img-producers"><img id="avant" src="../img/logo/avant-logo.png" alt="avant"/></div>
                    <div className="wrapp-img-producers"><img id="caesarstone" src="../img/logo/caesarstone-logo.png" alt="caesarstone"/></div>
                    <div className="wrapp-img-producers"><img id="silestone" src="../img/logo/silestone-logo.jpg" alt="silestone"/></div>
                    <div className="wrapp-img-producers"><img id="atem" src="../img/logo/atem-logo.png" alt="atem"/></div>
                    <div className="wrapp-img-producers"><img id="cimstone" src="../img/logo/cimstone-logo.png" alt="cimstone"/></div>
                    <div className="wrapp-img-producers"><img id="intekstone" src="../img/logo/intekstone-logo.png" alt="intekstone"/></div>
                    <div className="wrapp-img-producers"><img id="restonq" src="../img/logo/restonq-logo.png" alt="restonq"/></div>
                    <div className="wrapp-img-producers"><img id="samsung" src="../img/logo/samsung-logo.png" alt="samsung"/></div>
                    <input id="producer-name" type="text" name="chosen-producer" className="data-for-calculation hidden-data" value="avant"/>
                    <input id="color-name" type="text" name="chosen-color" className="data-for-calculation hidden-data" value=""/>
                </div>
                <div className="right-side">
                    <div className="current-color">
                        <img id="current-color" src="../img/colors/do-not-choose-pic.jpg" width="380" height="215" alt=""/>
                    </div>
                    <div id="list-spec-colors" className="spec-color">
                        <p>Торговая марка:</p>
                        <p className="fillable" id="trade-mark"></p>
                        <p>Цвет:</p>
                        <p className="fillable" id="slab-color"></p>
                        <p>Размер листа:</p>
                        <p className="fillable" id="size-1"></p>
                        <p className="fillable" id="size-2"></p>
                        <p className="fillable" id="size-3"></p>
                    </div>
                    <div id="list-colors" className="colors">                
                    </div>
                </div>
            </div>
        </>
    )
}