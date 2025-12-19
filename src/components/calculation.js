import { useFormContext } from 'react-hook-form';
import "../css/calculation.css"
import ErrorMessage from '../components/service/error-message'

function collectErrors(errors, parentPath = "") {  
    const result = [];
  Object.entries(errors).forEach(([key, value]) => {
    const path = parentPath ? `${parentPath}.${key}` : key;
    if (!value) return;
    // это конечная ошибка поля
    if ("type" in value) {
      result.push({
        path,
        error: value,
      });
      return;
    }
    // вложенный объект → рекурсия
    result.push(
      ...collectErrors(value, path)
    );
    console.log(result)
  });

  return result;
}

export default function Calculation({result}) {
    const { formState: { errors } } = useFormContext()
    const allErrors = collectErrors(errors);

    return (
        <>
            <div className="step-title">
                <h2><span className="num-step-title">6</span>Расчет:</h2>
            </div>
            <div className="counter-grid">
                <div>
                    <label htmlFor="answer-hrn">Стоимость </label>                    
                    <input 
                        id="answer-hrn" 
                        type="text" 
                        name="count-answer" 
                        className="result-input"
                        value={result ? (result * 41.5).toLocaleString('ru-RU', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    }) : ''} 
                        readOnly
                    /> грн
                </div>
                <div>
                    <label htmlFor="answer-dol">Стоимость </label>
                    <input 
                        id="answer-dol" 
                        type="text" 
                        name="count-answer" 
                        className="result-input"
                        value={result ? result.toLocaleString('ru-RU', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }) : ''} 
                        readOnly
                    /> дол
                </div>
                <button type="submit">РАСЧИТАТЬ</button>
                {allErrors.map(({ path, error }) => (
                    <div key={path}>
                        <ErrorMessage error={error}/>
                    </div>

                ))}
            </div>
        </>
    )
}