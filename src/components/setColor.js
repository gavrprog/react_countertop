import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { currentProducer } from '../store/reducers'//the name of action
import axios from 'axios'
// import { producers } from '../data/data.js'
import "../css/setColor.css"
import doNotChoosenColorIMG from '../img/colors/do-not-choose-pic.jpg'

const PATH_COLOR = 'https://interkam.od.ua/calculator/img/colors/'
const PATH_LOGO = 'https://interkam.od.ua/calculator/img/logos/'
const PATH_PRODUCERS = 'http://localhost:3001/api/producers/'
const PATH_PROD = 'http://localhost:3001/api/prod/'


function ColorsOfProducer({arrayMinIMG, selected, handlClick}) {

    return (
        arrayMinIMG.map((image, index) => (
            <div key={image.name} className="wrapp-img">
                <img id={index} onClick={handlClick} className={(selected === index) ? 'selected' : undefined} src={PATH_COLOR + image.min} alt={image.name}/>
                <p>{image.name}</p>
            </div>
        ))
    )
}

export default function SetColor() {
    const dispatch = useDispatch()
    const selectedProducer = useSelector((state) => state.selectedProducer.name)
    const [getReq, setGetReq] = useState(PATH_PROD + 'avant')
    const [producers, setProducers] = useState([])
    const [arrayProducer, setArrayProducer] = useState([])
    const [selectedColor, setSelectedColor] = useState(-1)
   
    useEffect(() => {
        axios.get(getReq)
            .then((response) => setArrayProducer(response.data))
            .catch((err) => alert('Error when executed AXIOS in request the producer price. The error is:', err))
        }, [getReq]
    )

    useEffect(() => {
        axios.get(PATH_PRODUCERS)
        .then((response) => setProducers(response.data))
        .catch((err) => alert('Error when executed AXIOS in request ppoducers names with logo. The error is:', err))
    }, [])
 
    const handlClickProducer = (event) => {
        const url = PATH_PROD + event.target.id // need to send this id to the store
        dispatch(currentProducer(event.target.id))
        setGetReq(url)
        setSelectedColor(-1)
    }

    const handlClickColor = (event) => {
        setSelectedColor(+event.target.id)
    }

    return (
        <>
            <div className="step-title">
                <h2><span className="num-step-title">3</span>Производитель и цвет камня:</h2>
            </div>
            <div className="wrapper-4">
                <div id="list-producers" className="producers">
                    {producers.map((producer) => (
                        <div className={`wrapp-img-producers ${producer.name === selectedProducer && 'selected'}`} key={producer.name}>
                            <img id={producer.name} src={PATH_LOGO + producer.image} onClick={handlClickProducer} alt={producer.name}/>
                        </div>
                    ))}
                    {/* <input id="producer-name" type="text" name="chosen-producer" className="data-for-calculation hidden-data"/>
                    <input id="color-name" type="text" name="chosen-color" className="data-for-calculation hidden-data"/> */}
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
                        <ColorsOfProducer arrayMinIMG={arrayProducer} selected={selectedColor} handlClick={handlClickColor}/>           
                    </div>
                </div>
            </div>
        </>
    )
}