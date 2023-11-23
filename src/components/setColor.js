import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { currentProducer } from '../store/reducers'//the name of action
import axios from 'axios'
import { producers } from '../data/data.js'
import "../css/setColor.css"
import doNotChoosenColorIMG from '../img/colors/do-not-choose-pic.jpg'


function ColorsOfProducer({arrayMinIMG}) {

    return (
        arrayMinIMG.map((image, index) => (
            <div key={image} className="wrapp-img">
                <img src={image} alt={`image-${index}`} />
                <p>Название</p>
            </div>
        ))
    )
}

export default function SetColor() {
    const dispatch = useDispatch()
    const selectedProducer = useSelector((state) => state.selectedProducer.name)
    //const [currProducer, setCurrProducer] = useState('avant')
    const [getReq, setGetReq] = useState('http://localhost:3001/api/prod/' + selectedProducer)
    const [arrayProducer, setArrayProducer] = useState([])
    
    const arrayMinIMG = []
   
    useEffect(() => {
        axios.get(getReq)
            .then((response) => response.data)
            .then((array) => setArrayProducer(array))
            .catch((err) => alert('Error when executed AXIOS in request min avant. The error is:', err))
        }, [getReq])

    arrayProducer.forEach((obj) => arrayMinIMG.push('https://interkam.od.ua/calculator/img/colors/avant/' + obj.min))


    const handlClick = (event) => {
        const url = 'http://localhost:3001/api/prod/' + event.target.id // need to send this id to the store
        console.log(url)
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
                        <ColorsOfProducer arrayMinIMG={arrayMinIMG}/>           
                    </div>
                </div>
            </div>
        </>
    )
}