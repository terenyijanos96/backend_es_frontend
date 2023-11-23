import TablaFejlecView from "./TablaFejlecView.js";
import TablaSorView from "./TablaSorView.js";

export default class TablaView {
  #szuloElem;
  #thead;
  #tbody;
  constructor(lista, szuloElem) {
    this.lista = lista;
    this.#szuloElem = szuloElem;

    this.#htmlLetrehozo();

    this.#thead = $("thead");
    this.#tbody = $("tbody");

    this.sorLetrehozo();
  }

  #htmlLetrehozo() {
    this.#szuloElem.html(`
            <table class="table table-striped">
                <thead></thead>
                <tbody></tbody>
            </table>
        `);
  }

  sorLetrehozo() {
    new TablaFejlecView(this.#thead);

    this.lista.forEach((obj) => {
      new TablaSorView(this.#tbody, obj);
    });
  }
}
