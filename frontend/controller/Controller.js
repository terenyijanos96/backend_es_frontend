import DataService from "../model/DataService.js";
import UrlapView from "../view/Urlap/UrlapView.js"
import TablaView from "../view/Tablazat/TablaView.js"

export default class Controller {
    constructor(){
        this.dataService = new DataService

        this.dataService.getData("poets", this.megjelenit)
    }

    megjelenit(lista){
        //new UrlapView()
        
        new TablaView(lista, $(".tablazat"))
    }
}