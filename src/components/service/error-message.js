import '../../index.css'

export default function ErrorMessage({ error }) {
  if (!error) return null;

  if (error.message) {
    return <p className="message-error">*{error.message}</p>;
  }

  switch (error.type) {
    case "required":
      return <p className="message-error">Поле обязательно</p>;
    case "min":
      return <p className="message-error">Значение слишком маленькое</p>;
    case "max":
      return <p className="message-error">Значение слишком большое</p>;
    case "minLength":
      return <p className="message-error">Слишком короткое значение</p>;
    case "maxLength":
      return <p className="message-error">Слишком длинное значение</p>;
    case "pattern":
      return <p className="message-error">Неверный формат</p>;
    default:
      return <p className="message-error">Некорректное значение</p>;
  }
}
