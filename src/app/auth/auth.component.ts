import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent {

    islogingMode=true;

    onSwitchMode(){
        this.islogingMode=!this.islogingMode;
    }
    onSubmit(form: NgForm){
    console.log(form.value);
    form.reset();
    }
}