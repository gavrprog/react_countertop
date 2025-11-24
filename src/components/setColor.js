import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { currentProducer } from '../store/reducers'//the name of action
import { Fancybox } from "@fancyapps/ui";
import doNotChoosenColorIMG from '../img/colors/do-not-choose-pic.jpg'
import axios from 'axios'
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "../css/setColor.css"

const PATH_WEB = 'https://interkam.od.ua/calculator/img'
const PATH_API = 'http://localhost:3001/api'

function ColorsOfProducer({arrayMinIMG, selected, handlClick}) {

    return (
        arrayMinIMG.map((image, index) => (
            <div key={image.name} className="wrapp-img">
                <img 
                    id={index} 
                    onClick={handlClick} 
                    className={selected === index ? 'selected' : undefined} 
                    src={PATH_WEB + image.min} alt={image.name}
                />
                <p>{image.name}</p>
            </div>
        ))
    )
}

export default function SetColor() {
    const dispatch = useDispatch()
    const selectedProducer = useSelector((state) => state.stoneProducer.name)//read from store selected TM

    const [getReq, setGetReq] = useState(PATH_API + '/avant')
    const [producers, setProducers] = useState([])
    const [arrayProducer, setArrayProducer] = useState([])
    const [selectedColorID, setSelectedColorID] = useState(-1)
    const [selectedColorDATA, setSelectedColorDATA] = useState({})
    const [selectedColorName, setSelectedColorName] = useState('')

    useEffect(() => {
        Fancybox.bind("[data-fancybox]")
        return () => {
        Fancybox.unbind("[data-fancybox]")
        Fancybox.close()
        }
    }, [])

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
        const url = PATH_API + '/' + event.target.id //send this id to the store
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
                        {!selectedColorDATA.max ? 
                            <img id="current-color"
                                src={doNotChoosenColorIMG}
                                style={{cursor: 'default'}}
                                alt='Цвет не выбран'
                            /> :
                            <a data-fancybox="image" href={PATH_WEB + selectedColorDATA.max}>
                                <img id="current-color"
                                    src={PATH_WEB + selectedColorDATA.max}
                                    style={{cursor:  'pointer'}}
                                    alt={selectedColorName}
                                />
                            </a>
                        }
                    </div>
                    <div id="list-spec-colors" className="spec-color">
                        <p>Торговая марка:</p>
                        <p className="fillable" id="trade-mark">{selectedProducer.toUpperCase()}</p>
                        <p>Цвет:</p>
                        <p className="fillable" id="slab-color">{selectedColorDATA.color}&nbsp;{selectedColorName || "Цвет не выбран"}</p>
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