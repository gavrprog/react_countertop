import straight from "../img/Screenshot_1.jpg"
import corner from "../img/Screenshot_2.jpg"
import multicorner from "../img/Screenshot_3.jpg"
import bigPictureStraight from "../img/line1.jpg"
import bigPictureCorner from "../img/line2.jpg"
import bigPictureMulticorner from "../img/line3.jpg"

const picBlueprints = [
    {id: "bluePrint_1", img: straight, alt: "Прямая столешница"},
    {id: "bluePrint_2", img: corner, alt: "Г-образная столешница"},
    {id: "bluePrint_3", img: multicorner, alt: "П-образная столешница"}
]

const picLarge = {
    bluePrint_1: {path: bigPictureStraight, form: "straight"},
    bluePrint_2: {path: bigPictureCorner, form: "corner"},
    bluePrint_3: {path: bigPictureMulticorner, form: "multicorner"}
}

const dataDimentions = [
    {id: "a_dimension" , idInput: "a-dimension-field", labelName: "Ширина столешницы: A =", inputName: "length_A", min: 560, max: 650},
    {id: "b_dimension" , idInput: "b-dimension-field", labelName: "Длина столешницы: B =", inputName: "length_B", min: 1000, max: 6000},
    {id: "c_dimension" , idInput: "c-dimension-field", labelName: "C =", inputName: "length_C", min: 1000, max: 6000},
    {id: "d_dimension" , idInput: "d-dimension-field", labelName: "D =", inputName: "length_D", min: 1000, max: 6000}
]

const imagesLogo = require.context('../img/logo', false)
const imageArrayLogo = imagesLogo.keys().map(image => imagesLogo(image))

const producers = [
    {id: 'avant'},
    {id: 'caesarstone'},
    {id: 'silestone'},
    {id: 'atem'},
    {id: 'cimstone'},
    {id: 'intekstone'},
    {id: 'restonq'},
    {id: 'samsung'}
]

producers.forEach((producer, i) => producer.image = imageArrayLogo[i])

export { picBlueprints, picLarge, dataDimentions, producers }