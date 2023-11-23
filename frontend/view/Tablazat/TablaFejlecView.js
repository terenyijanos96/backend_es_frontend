import { fejlec } from "./fejlecek.js"

export default class TablaFejlecView {

    #szuloElem
    #obj 
    constructor(szuloElem, obj){
        this.#szuloElem = szuloElem
        this.#obj = fejlec

        this.#htmlLetrehoz()
    }

    #htmlLetrehoz(){
        let html_tartalom = ""

        for (const key in this.#obj) {
            html_tartalom += `
                <th>
                    ${this.#obj[key]}
                </th>
            `
        }

        this.#szuloElem.append(`<tr>${html_tartalom}</tr>`)
    }
}