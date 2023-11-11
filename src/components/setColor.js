import React from "react";
import "../css/setColor.css"
import avantIMG from '../img/logo/avant-logo.png'
import cesarstoneIMG from '../img/logo/caesarstone-logo.png'
import silestoneIMG from '../img/logo/silestone-logo.jpg'
import atemIMG from '../img/logo/atem-logo.png'
import cimstoneIMG from '../img/logo/cimstone-logo.png'
import intekstonetIMG from '../img/logo/intekstone-logo.png'
import restonqtIMG from '../img/logo/restonq-logo.png'
import samsungIMG from '../img/logo/samsung-logo.png'
import doNotChoosenColorIMG from '../img/colors/do-not-choose-pic.jpg'

export default function SetColor() {
    return (
        <>
            <div className="step-title">
                <h2><span className="num-step-title">3</span>Производитель и цвет камня:</h2>
            </div>
            <div className="wrapper-4">
                <div id="list-producers" className="producers">
                    <div className="wrapp-img-producers selected"><img id="avant" src={avantIMG} alt="avant"/></div>
                    <div className="wrapp-img-producers"><img id="caesarstone" src={cesarstoneIMG} alt="caesarstone"/></div>
                    <div className="wrapp-img-producers"><img id="silestone" src={silestoneIMG} alt="silestone"/></div>
                    <div className="wrapp-img-producers"><img id="atem" src={atemIMG} alt="atem"/></div>
                    <div className="wrapp-img-producers"><img id="cimstone" src={cimstoneIMG} alt="cimstone"/></div>
                    <div className="wrapp-img-producers"><img id="intekstone" src={intekstonetIMG} alt="intekstone"/></div>
                    <div className="wrapp-img-producers"><img id="restonq" src={restonqtIMG} alt="restonq"/></div>
                    <div className="wrapp-img-producers"><img id="samsung" src={samsungIMG} alt="samsung"/></div>
                    <input id="producer-name" type="text" name="chosen-producer" className="data-for-calculation hidden-data" value="avant"/>
                    <input id="color-name" type="text" name="chosen-color" className="data-for-calculation hidden-data" value=""/>
                </div>
                <div className="right-side">
                    <div className="current-color">
                        <img id="current-color" src={doNotChoosenColorIMG} width="380" height="215" alt=""/>
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