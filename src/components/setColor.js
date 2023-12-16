import React, { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { currentProducer } from '../store/reducers'//the name of action
import useWindowDimensions from './hook/useWindowDimention'
import axios from 'axios'
import { Zoom, IconButton, Paper } from '@mui/material'
// import IconButton from '@mui/material/IconButton'
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone'
import "../css/setColor.css"
import doNotChoosenColorIMG from '../img/colors/do-not-choose-pic.jpg'

const PATH_WEB = 'https://interkam.od.ua/calculator/img'
const PATH_API = 'http://localhost:3001/api'

function ColorsOfProducer({arrayMinIMG, selected, handlClick}) {

    return (
        arrayMinIMG.map((image, index) => (
            <div key={image.name} className="wrapp-img">
                <img id={index} onClick={handlClick} className={selected === index ? 'selected' : undefined} src={PATH_WEB + '/colors/' + image.min} alt={image.name}/>
                <p>{image.name}</p>
            </div>
        ))
    )
}

export default function SetColor() {
    const dispatch = useDispatch()
    const selectedProducer = useSelector((state) => state.selectedProducer.name)
    const { width } = useWindowDimensions()

    const [getReq, setGetReq] = useState(PATH_API + '/avant')
    const [producers, setProducers] = useState([])
    const [arrayProducer, setArrayProducer] = useState([])
    const [selectedColorID, setSelectedColorID] = useState(-1)
    const [selectedColorDATA, setSelectedColorDATA] = useState({})
    const [selectedColorName, setSelectedColorName] = useState('')
    const [isClickZoom, setIsClickZoom] = useState(false)

   
    useEffect(() => {
        axios.get(getReq)
            .then((response) => setArrayProducer(response.data))
            .catch((err) => alert('Error when executed AXIOS in request the producer price. The error is:', err))
        }, [getReq]
    )

    useEffect(() => {
        axios.get(PATH_API + '/producers/')
        .then((response) => setProducers(response.data))
        .catch((err) => alert('Error when executed AXIOS in request producers names with logo. The error is:', err))
    }, [])
 
    useEffect(() => {
        if (selectedColorName) {
            axios.get(PATH_API + '/' + selectedProducer + '/' + selectedColorName)
            .then((response) => setSelectedColorDATA(response.data[0]))
            .catch((err) => alert('Error when executed AXIOS in request max pic by color name. The error is:', err))
        }
    }, [selectedProducer, selectedColorName])

    const handlClickProducer = (event) => {
        const url = PATH_API + '/' + event.target.id // need to send this id to the store
        dispatch(currentProducer(event.target.id))
        setGetReq(url)
        setSelectedColorID(-1)
        setSelectedColorName('')
        setSelectedColorDATA({})
    }

    const handlClickColor = (event) => {
        setSelectedColorID(+event.target.id)
        setSelectedColorName(event.target.alt)
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
                            <img id={producer.name} src={PATH_WEB + '/logos/' + producer.image} onClick={handlClickProducer} alt={producer.name}/>
                        </div>
                    ))}
                </div>
                <div className="right-side">
                    <div className="current-color">
                        <img id="current-color"
                            src={selectedColorDATA.max ? PATH_WEB + '/colors/' + selectedColorDATA.max : doNotChoosenColorIMG}
                            alt={selectedColorName || 'Цвет не выбран'}
                            onClick={() => setIsClickZoom((prevStat) => !prevStat)}
                        />

                        <div className={isClickZoom ? "active" : "inactive"} >
                            <div className="close" style={{opacity: 1}}>×</div>
                            <img 
                                src={PATH_WEB + '/colors/' + selectedColorDATA.max} 
                                width={width - 100} 
                                height={(width / 380) * 215} 
                                alt="selected color"
                            />
                        </div>






                    </div>
                    <div id="list-spec-colors" className="spec-color">
                        <p>Торговая марка:</p>
                        <p className="fillable" id="trade-mark">{selectedProducer.toUpperCase()}</p>
                        <p>Цвет:</p>
                        <p className="fillable" id="slab-color">{selectedColorName || "Цвет не выбран"}</p>
                        <p>Размер листа:</p>
                        <p className="fillable" id="size-1">(N) 12 мм:&nbsp;{selectedColorDATA.thinLength ? selectedColorDATA.thinLength + ' x ' + selectedColorDATA.thinHeight : "-"}</p>
                        <p className="fillable" id="size-2">(N) 20 мм:&nbsp;{selectedColorDATA.normalLength ? selectedColorDATA.normalLength + ' x ' + selectedColorDATA.normalHeight : "-"}</p>
                        <p className="fillable" id="size-3">(J) 20 мм:&nbsp;{selectedColorDATA.jamboLength ? selectedColorDATA.jamboLength + ' x ' + selectedColorDATA.jamboHeight : "-"}</p>
                    </div>
                    <div id="list-colors" className="colors">     
                        <ColorsOfProducer arrayMinIMG={arrayProducer} selected={selectedColorID} handlClick={handlClickColor}/>           
                    </div>
                </div>
            </div>
        </>
    )
}