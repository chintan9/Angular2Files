import { Component, View } from "angular2/core"

@Component({
    selector:"Login"
})

@View({
    templateUrl: "src/login/view-login.html" 
})
export class Login {
    constructor(){
        
    }
    login(){
        alert("hello world");
    }
}