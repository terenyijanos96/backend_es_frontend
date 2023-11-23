import { fejlec } from "../Tablazat/fejlecek.js";

export default class UrlapView {
  #szuloElem;
  constructor(szuloElem) {
    this.#szuloElem = szuloElem;

    this.#htmlLetrehozasa();

    this.inputAdatokLekerese();

    $("form").submit((event) => {
      event.preventDefault();
      this.#esemenyLetrehozo("sorLetrehozas");
    });
  }

  #htmlLetrehozasa() {
    let html_tartalom = "";

    for (const key in fejlec) {
      if (key !== "id") {
        html_tartalom += `
        <div class="mb-3 form-check">
            <label for="${key}">${fejlec[key]}</label>
            <input type="text" name="${key}" id="${key}" class="form-control" />
        </div>`;
      }
    }

    html_tartalom += `<button type="submit" class="btn btn-primary">Felvitel</button>`;

    this.#szuloElem.html(`<form>${html_tartalom}</form>`);
  }

  inputAdatokLekerese() {
    const obj = {};

    for (const key in fejlec) {
      if (key !== "id") {
        obj[key] = $(`form input[name=${key}]`).val();
      }
    }

    return obj;
  }

  #esemenyLetrehozo(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, {
      detail: this.inputAdatokLekerese(),
    });
    window.dispatchEvent(esemenyem);
  }
}
