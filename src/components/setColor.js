import React, { useState, useEffect } from "react"
import { useFormContext } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux'
import { currentProducer } from '../store/reducers'//the name of action
import { Fancybox } from "@fancyapps/ui";
import doNotChoosenColorIMG from '../img/colors/do-not-choose-pic.jpg'
import axios from 'axios'
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "../css/setColor.css"

const PATH_WEB = 'https://interkam.od.ua/calculator/img'
const PATH_API = 'http://localhost:3001/api'

function ColorsOfProducer({arrayProducer, selectedColor}) {
    const { register } = useFormContext()

    return (
        arrayProducer.map((stone, index) => (
            <div key={index} className="wrapp-img">
                <label htmlFor={stone.color}>
                    <input id={stone.color} type="radio" {...register('stone.color')} value={stone.color}/>
                    <img 
                        id={index} 
                        className={selectedColor === stone.color ? 'selected' : undefined} 
                        src={PATH_WEB + stone.min}
                        alt={stone.name}
                    />
                <span>{stone.name}</span>              
                </label>
            </div>
        ))
    )
}

export default function SetColor() {
    const { register, watch, setValue } = useFormContext()
    const selectedColor = watch("stone.color"); // текущее выбранное значение
    const selectedProducer = watch("stone.producer");
    const [producers, setProducers] = useState([])
    const [arrayProducer, setArrayProducer] = useState([])
    const [selectedColorDATA, setSelectedColorDATA] = useState({})

    // it is needed becous of fancybox - make a pic bigger
    useEffect(() => {
        Fancybox.bind("[data-fancybox]")
        return () => {
        Fancybox.unbind("[data-fancybox]")
        Fancybox.close()
        }
    }, [])

    useEffect(() => {
        setValue('stone.color', '');
        setSelectedColorDATA({})
        axios.get(PATH_API + '/' + selectedProducer)
        .then((response) => setArrayProducer(response.data))
        .catch((err) => alert('Error when executed AXIOS in request the producer price. The error is:', err))
        }, [selectedProducer, setValue]
    )

    useEffect(() => {
        axios.get(PATH_API + '/producers/')
        .then((response) => {setProducers(response.data)})
        .catch((err) => alert('Error when executed AXIOS in request producers names with logo. The error is:', err))
    }, [])
 
    useEffect(() => {
        if (selectedColor !== '') {
            axios.get(PATH_API + '/' + selectedProducer + '/' + selectedColor)
            .then((response) => {setSelectedColorDATA(response.data[0])})
            .catch((err) => alert('Error when executed AXIOS in request max pic by color name. The error is:', err))
        }
    }, [selectedColor])

    return (
        <>
            <div className="step-title">
                <h2><span className="num-step-title">3</span>Производитель и цвет камня:</h2>
            </div>
            <div className="wrapper-4">
                <div id="list-producers" className="producers">
                    {producers.map((producer) => (
                        <div className={`wrapp-img-producers ${producer.name === selectedProducer && 'selected'}`} key={producer.name}>
                            <label>
                                <input type="radio" {...register('stone.producer')} value={producer.name}/>
                                <img id={producer.name} src={PATH_WEB + '/logos/' + producer.image} alt={producer.name}/>
                            </label>
                        </div>
                    ))}
                </div>
                <div className="right-side">
                    <div className="current-color">
                        {selectedColor === "" ? 
                            <img id="current-color"
                                src={doNotChoosenColorIMG}
                                style={{cursor: 'default'}}
                                alt='Цвет не выбран'
                            /> :
                            <a data-fancybox="image" href={PATH_WEB + selectedColorDATA.max}>
                                <img id="current-color"
                                    src={PATH_WEB + selectedColorDATA.max}
                                    style={{cursor:  'pointer'}}
                                    alt={selectedColor}
                                />
                            </a>
                        }
                    </div>
                    <div id="list-spec-colors" className="spec-color">
                        <p>Торговая марка:</p>
                        <p className="fillable" id="trade-mark">{selectedProducer.toUpperCase()}</p>
                        <p>Цвет:</p>
                        <p className="fillable" id="slab-color">{selectedColorDATA.color}&nbsp;{selectedColorDATA.name || "Цвет не выбран"}</p>
                        <p>Размер листа:</p>
                        <p className="fillable" id="size-1">(N) 12 мм:&nbsp;{selectedColorDATA.thinLength ? selectedColorDATA.thinLength + ' x ' + selectedColorDATA.thinHeight : "-"}</p>
                        <p className="fillable" id="size-2">(N) 20 мм:&nbsp;{selectedColorDATA.normalLength ? selectedColorDATA.normalLength + ' x ' + selectedColorDATA.normalHeight : "-"}</p>
                        <p className="fillable" id="size-3">(J) 20 мм:&nbsp;{selectedColorDATA.jamboLength ? selectedColorDATA.jamboLength + ' x ' + selectedColorDATA.jamboHeight : "-"}</p>
                    </div>
                    <div id="list-colors" className="colors">     
                        <ColorsOfProducer arrayProducer={arrayProducer} selectedColorName={selectedColor}/>           
                    </div>
                </div>
            </div>
        </>
    )
}