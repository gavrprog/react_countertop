import { useFormContext } from 'react-hook-form'
import "../css/additionally.css"

export default function Additionally() {
    const { register } = useFormContext()

    return (
        <>
            <div className="step-title">
                <h2><span className="num-step-title">5</span>Дополнительные услуги:</h2>
            </div>
            <div  className="additionally">
                <div>
                    <input id="add-sink" type="checkbox" {...register('additional.sink')} className="data-for-calculation" />
                    <label htmlFor="add-sink">Монтаж мойки под столешницу"</label>
                </div>		
                <div>
                    <input id="add-montage" type="checkbox" {...register('additional.montage')} className="data-for-calculation"/>
                    <label htmlFor="add-montage">Монтаж</label>
                </div>
                <div>
                    <input id="add-delivery" type="checkbox" {...register('additional.delivery')} className="data-for-calculation" />
                    <label htmlFor="add-delivery">Доставка</label>
                </div>
            </div>
        </>
    )
}