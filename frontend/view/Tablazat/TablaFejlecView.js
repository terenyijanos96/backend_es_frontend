
export default class TablaFejlecView {

    #szuloElem
    #fejlec
    constructor(szuloElem, fejlec){
        this.#szuloElem = szuloElem
        this.#fejlec = fejlec

        this.#htmlLetrehoz()
    }

    #htmlLetrehoz(){
        let html_tartalom = ""

        for (const key in this.#fejlec) {
            html_tartalom += `
                <th>
                    ${this.#fejlec[key]}
                </th>
            `
        }

        this.#szuloElem.append(`<tr>${html_tartalom}</tr>`)
    }
}