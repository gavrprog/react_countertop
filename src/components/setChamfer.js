import { useFormContext } from 'react-hook-form'
import "../css/setChamfer.css"

export default function SetChamfer({initChamfers}) {
    const { register } = useFormContext()

    return (
        <>
            <div className="step-title">
                <h2><span className="num-step-title">4</span>Выбор фаски:</h2>
            </div>
            <div className="edges">
                {initChamfers.map((chamfer) => (
                    <div key={chamfer.type}>
                        <label htmlFor={chamfer.type}>
                            <p>тип {chamfer.type}</p>
                            <img src={'http://interkam.od.ua/calculator/img/' + chamfer.image} alt={'фаска кромка ' + chamfer.type}/>
                            <input id={chamfer.type} type="radio" {...register('chamfer')} value={chamfer.type}/>
                        </label>
                    </div>
                ))}
            </div>
        </>
    )
}