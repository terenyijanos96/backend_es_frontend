import { fejlec } from "./fejlecek.js";

export default class TablaSorView {
  #szuloElem;
  #obj;
  #torlesGomb;
  #modositasGomb;
  #modosithato_e
  constructor(szuloElem, obj) {
    this.#szuloElem = szuloElem;
    this.#obj = obj;
    this.#modosithato_e = false

    this.#htmlLetrehoz();

    this.#torlesGomb = $(".torles-gomb:last");
    this.#modositasGomb = $(".torles-gomb:last");

    this.#torlesGomb.click((event) => {
      event.preventDefault();
      this.#esemenyLetrehozo("sorTorles");
    });

    this.#modositasGomb.click((event) => {
      event.preventDefault();
      $()
      this.#esemenyLetrehozo("sorModositas");
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
      {
        gombClassok: ["btn", "btn-outline-primary", "modositas-gomb"],
        ikonClassok: ["bi", "bi-pencil-square"],
        szoveg: "Módosítás",
      },
    ];

    for (const key in this.#obj) {
      if (key in fejlec) {
        html_tartalom += `
            <td>
                <input type="text" name="" id="" value="${this.#obj[key]}" disabled="${this.getModosithato_e}">
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

  getId() {
    return this.#obj.id;
  }

  getModosithato_e(){
    return this.#modosithato_e
  }

  modosithatosagAllitasa(){
    this.#modosithato_e = !this.#modosithato_e
  }

  #esemenyLetrehozo(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, {
      detail: { id: this.getId() },
    });
    window.dispatchEvent(esemenyem);
  }
}
