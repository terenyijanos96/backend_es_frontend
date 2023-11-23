import { fejlec } from "./fejlecek.js";

export default class TablaSorView {
  #szuloElem;
  #obj;
  #torlesGomb;
  #id
  constructor(szuloElem, obj) {
    this.#szuloElem = szuloElem;
    this.#obj = obj;

    this.#id = this.#obj["poet_id"]

    this.#htmlLetrehoz();

    this.#torlesGomb = $(".torles-gomb:last");

    this.#torlesGomb.click((event) => {
      event.preventDefault();
      this.#esemenyLetrehozo("sorTorles");
    });
  }

  #htmlLetrehoz() {
    let html_tartalom = "";
    let gombObjLista = [
      {
        gombClassok: ["btn", "btn-outline-danger", "torles-gomb"],
        ikonClassok: ["bi", "bi-trash-fill"],
        szoveg: "Törlés",
      },
    ];

    for (const key in this.#obj) {
      if (key in fejlec) {
        html_tartalom += `
            <td>
                ${this.#obj[key]}
            </td>
        `;
      }
    }

    gombObjLista.forEach((gomb) => {
      html_tartalom += `
            <td>
                <button class="${gomb.gombClassok.join(" ")}">
                    <i class="${gomb.ikonClassok.join(" ")}"></i>
                    ${gomb.szoveg}
                </button>
            </td>
        `;
    });

    this.#szuloElem.append(`<tr>${html_tartalom}</tr>`);
  }

  getIndex(){
    return this.#id
  }

  #esemenyLetrehozo(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, { detail: { id: this.getIndex()} });
    window.dispatchEvent(esemenyem);
  }
}
