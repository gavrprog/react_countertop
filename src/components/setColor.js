import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { currentProducer } from '../store/reducers'//the name of action
import axios from 'axios'
import { producers } from '../data/data.js'
import "../css/setColor.css"
import doNotChoosenColorIMG from '../img/colors/do-not-choose-pic.jpg'

const PATH_COLOR = 'https://interkam.od.ua/calculator/img/colors/'
const PATH_PROD = 'http://localhost:3001/api/prod/'


function ColorsOfProducer({arrayMinIMG, selectedProducer}) {

    return (
        arrayMinIMG.map((image) => (
            <div key={image.name} className="wrapp-img">
                <img src={PATH_COLOR + image.min} alt={image.name} />
                <p>{image.name}</p>
            </div>
        ))
    )
}

export default function SetColor() {
    const dispatch = useDispatch()
    const selectedProducer = useSelector((state) => state.selectedProducer.name)
    const [getReq, setGetReq] = useState(PATH_PROD + 'avant')
    const [arrayProducer, setArrayProducer] = useState([])
   
    useEffect(() => {
        axios.get(getReq)
            .then((response) => setArrayProducer(response.data))
            .catch((err) => alert('Error when executed AXIOS in request min avant. The error is:', err))
        }, [getReq]
    )
 
    const handlClick = (event) => {
        const url = PATH_PROD + event.target.id // need to send this id to the store
        dispatch(currentProducer(event.target.id))
        setGetReq(url)
    }

    return (
        <>
            <div className="step-title">
                <h2><span className="num-step-title">3</span>Производитель и цвет камня:</h2>
            </div>
            <div className="wrapper-4">
                <div id="list-producers" className="producers">
                    {producers.map((producer) => (
                        <div className="wrapp-img-producers" key={producer.id}>
                            <img id={producer.id} src={producer.image} onClick={handlClick} alt={producer.id}/>
                        </div>
                    ))}
                    <input id="producer-name" type="text" name="chosen-producer" className="data-for-calculation hidden-data"/>
                    <input id="color-name" type="text" name="chosen-color" className="data-for-calculation hidden-data"/>
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
                        <ColorsOfProducer arrayMinIMG={arrayProducer} selectedProducer={selectedProducer}/>           
                    </div>
                </div>
            </div>
        </>
    )
}