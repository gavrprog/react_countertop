import React from "react"
import "../css/sendCalculation.css"

export default function SendCalculation() {
    return (
        <>
            <div className="step-title">
                <h2><span className="num-step-title">7</span>Отправка расчта:</h2>
            </div>
           
            <form className="form-sending" name="send-calculation" action="">
            
                <label htmlFor="email-field">Адрес эелектронной почты:*</label>
                <input id="email-field" type="text" name="form-email" placeholder="client@example.com" required data-status="invalid"/>
                <span id="email-error" className="error-message">Это поле должно содержать E-mail в формате client@example.com</span>
                
                <label htmlFor="name">Имя:*</label>
                <input id="name" type="text" name="form-name" placeholder="Иванов Иван" required data-status="invalid"/>
                <span id="name-error" className="error-message">Это поле должно содержать буквы</span>

                <label htmlFor="phone-field">Телефон:*</label>
                <input id="phone-field" type="text" name="form-phone" placeholder="+38-099-111-2233" minLength="16" maxLength="16" required data-status="invalid"/>
                <span id="phone-error" className="error-message">Это поле должно содержать телефон в формате +38-099-111-2233</span>

                <label htmlFor="textarea">Дополнительное сообщение, если необходимо:</label>
                <textarea name="textarea" id="textarea" cols="30" rows="10" maxLength="5" placeholder="Сообщение должно содержать не более 100 символов"></textarea>
                
                <button id="buttonSubmit" type="submit" disabled>ОТПРАВИТЬ</button>
            </form>
        </>
    )
}