import { useState, useEffect } from 'react'
import './App.css'
import { useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import SetShape from './components/setShape'
import SetDiimentions from './components/setDimentions'
import SetColor from './components/setColor'
import SetChamfer from './components/setChamfer'
import Additionally from './components/additionally'
import SendCalculation from './components/sendCalculation'
import Calculation from './components/calculation'

function App() {
  const methods = useForm({
    defaultValues: {
      shape: "straight",
      dimention: {
        length_a: 600,
        length_b: 0,
        length_c: 0,
        length_d: 0,
      },
      stone: {
        producer: "avant",
        color: ""
      },
      chamfer: "E",
      additional: {
        sink: false,
        montage: false,
        delivery: false,
      }
    }
  })

  //-----------------------------------------------------------------------------
  const { watch } = methods;

  // Отслеживаем все поля
  const allFields = watch();

  // Выводим в консоль при каждом изменении
  useEffect(() => {
    console.log('Текущее состояние формы:', allFields);
  }, [allFields]);

  const onSubmit = (data) => {
    axios.post("/api/calc", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    .then((response) => alert('Calculation complited', response.data))
    .catch((err) => alert('Data does not sended to calculate. The error is:', err))
  };
//-----------------------------------------------------------------------------

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [initShape, setInitShape] = useState([])
  const [initDimentions, setInitDimentions] = useState([])

  useEffect(() => {
    const initialData = async () =>{
      try{
        const[initShape, initDimentions] = await Promise.all([
          axios.get('http://localhost:3001/api/initShape'),
          axios.get('http://localhost:3001/api/initDimentions')
        ])
        setInitShape(initShape.data)
        setInitDimentions(initDimentions.data)
      } catch(error) {
        setError(error.response?.data?.message || error.message);
        console.error('Ошибка инициализации данных:', error);
      } finally {
        setLoading(false);
      }
    }
    // axios.get('http://localhost:3001/api/initShape')
    // .then((response) => setInitShape(response.data))
    // .catch((err) => alert('Error when executed AXIOS in request the initShape price. The error is:', err))
    // axios.get('http://localhost:3001/api/initDimentions')
    // .then((response) => setInitDimentions(response.data))
    // .catch((err) => alert('Error when executed AXIOS in request the initShape price. The error is:', err))

    initialData()
  }, [])

  if (loading) {
    return (
      <div style={{
        background: "rgba(255,255,255,0.5)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        fontWeight: "bold"
      }}>
        Загрузка…
      </div>
    );
  }

  if (error) {
    return <div>Ошибка загрузки данных: {error.message}</div>;
  }

  return (
    <FormProvider {...methods}>
      <div className="main-wrap">
        <main>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <SetShape allShapes={initShape}/>
            <SetDiimentions allShapes={initShape} initDimentions={initDimentions}/>
            <SetColor />
            <SetChamfer />
            <Additionally />
            <Calculation />
          </form>
          <SendCalculation />
        </main>
      </div>
    </FormProvider>
  );
}

export default App;
