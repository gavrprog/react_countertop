import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Zoom, Box, Backdrop, Modal } from '@mui/material'
import { currentProducer } from '../store/reducers'//the name of action
import useWindowDimensions from './hook/useWindowDimention'
import doNotChoosenColorIMG from '../img/colors/do-not-choose-pic.jpg'
import axios from 'axios'
import "../css/setColor.css"

const PATH_WEB = 'https://interkam.od.ua/calculator/img' //add folder "colors" in database to "min" and "max", delete here all "/colors/"
const PATH_API = 'http://localhost:3001/api'

function ColorsOfProducer({arrayMinIMG, selected, handlClick}) {

    return (
        arrayMinIMG.map((image, index) => (
            <div key={image.name} className="wrapp-img">
                <img 
                    id={index} 
                    onClick={handlClick} 
                    className={selected === index ? 'selected' : undefined} 
                    src={PATH_WEB + '/colors/' + image.min} alt={image.name}
                />
                <p>{image.name}</p>
            </div>
        ))
    )
}

export default function SetColor() {
    const dispatch = useDispatch()
    const selectedProducer = useSelector((state) => state.selectedProducer.name)//read from store selected TM
    const { width, height } = useWindowDimensions()

    const [getReq, setGetReq] = useState(PATH_API + '/avant')
    const [producers, setProducers] = useState([])
    const [arrayProducer, setArrayProducer] = useState([])
    const [selectedColorID, setSelectedColorID] = useState(-1)
    const [selectedColorDATA, setSelectedColorDATA] = useState({})
    const [selectedColorName, setSelectedColorName] = useState('')
    const [isClickZoom, setIsClickZoom] = useState(false)
    const [sizeZoom, setSizeZoom] = useState({heightPic: 0, widthPic: 0})

   
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

    const handlCklickZoomON = (event) => {
        setIsClickZoom((prevStat) => !prevStat)
        let heightPic, widthPic
        const ratio = event.target.offsetWidth / event.target.offsetHeight
        if (width/height < 1) {
            widthPic =  width * 0.9
            heightPic = widthPic / ratio
        } else {
            heightPic = height * 0.5
            widthPic = heightPic * ratio
        }
        setSizeZoom(() => ({ ...sizeZoom, heightPic: `${heightPic}`, widthPic: `${widthPic}`}))
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
                            onClick={handlCklickZoomON}
                        />

                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={isClickZoom}
                            onClose={() => setIsClickZoom((prevStat) => !prevStat)}
                            closeAfterTransition
                            slots={{ backdrop: Backdrop }}//dark background and point disable
                            slotProps={{ backdrop: {timeout: 500} }}
                        >
                            <Zoom in={isClickZoom}>
                                <Box sx={{
                                        position: "absolute",
                                        left: `${(width - sizeZoom.widthPic - 36) / 2}px`,
                                        top: `${(height - sizeZoom.heightPic -36) / 2}px`,
                                        bgcolor: "background.paper",
                                        border: "2px solid #000",
                                        boxShadow: 24,
                                        p: 2 //padding
                                        }}>
                                    <img
                                    src={PATH_WEB + '/colors/' + selectedColorDATA.max}
                                    style={{ position: "relative", width: `${sizeZoom.widthPic}px` }}
                                    alt={selectedColorName}
                                    />
                                </Box>
                            </Zoom>
                        </Modal>

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