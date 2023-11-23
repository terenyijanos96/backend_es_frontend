import DataService from "../model/DataService.js";
import UrlapView from "../view/Urlap/UrlapView.js"
import TablaView from "../view/Tablazat/TablaView.js"

export default class Controller {
    constructor(){
        this.dataService = new DataService

        this.dataService.getData("poets", this.megjelenit)

        $(window).on("sorLetrehozas", (event)=>{
            console.log(event.detail)
            this.dataService.postData("poets", event.detail)
        })

        $(window).on("sorTorles", (event)=>{
            this.dataService.deleteData("poets", event.detail.id) 
        })
    }

    megjelenit(lista){
        new UrlapView($(".urlap"))
        
        new TablaView(lista, $(".tablazat"))
    }
}