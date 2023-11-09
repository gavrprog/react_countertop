import straight from "../img/Screenshot_1.jpg"
import corner from "../img/Screenshot_2.jpg"
import multicorner from "../img/Screenshot_3.jpg"
import bigPictureStraight from "../img/line1.jpg"
import bigPictureCorner from "../img/line2.jpg"
import bigPictureMulticorner from "../img/line3.jpg"

const picBlueprints = {
    bluePrint_1: {img: straight, source: bigPictureStraight, form: "straight", alt: "Прямая столешница"},
    bluePrint_2: {img: corner, source: bigPictureCorner, form: "corner", alt: "Г-образная столешница"},
    bluePrint_3: {img: multicorner, source: bigPictureMulticorner, form: "multicorner", alt: "П-образная столешница"}
}

const dataDimentions = {
    a_dimension: {id: "a-dimension-field", labelName: "Ширина столешницы: A =", inputName: "length_A", min: 560, max: 650},
    b_dimension: {id: "b-dimension-field", labelName: "Длина столешницы: B =", inputName: "length_B", min: 1000, max: 6000},
    c_dimension: {id: "c-dimension-field", labelName: "C =", inputName: "length_C", min: 1000, max: 6000},
    d_dimension: {id: "d-dimension-field", labelName: "D =", inputName: "length_D", min: 1000, max: 6000}
}

export { picBlueprints, dataDimentions }