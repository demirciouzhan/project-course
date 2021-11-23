import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from './auth.service';
@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent {

    islogingMode = true;
    isLoading = false;
    error: string = null;

    constructor(private authService: AuthService) { }

    onSwitchMode() {
        this.islogingMode = !this.islogingMode;
    }
    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const EMAİL = form.value.email;
        const PASSWORD = form.value.password;

        this.isLoading = true;
        if (this.islogingMode) {
            //...
        } else {
            this.authService.signup(EMAİL, PASSWORD).subscribe(resData => {
                console.log(resData);
                this.isLoading = false;
            },
                errorMessage => {
                    console.log(errorMessage);

                    this.error=errorMessage;

                    this.isLoading = false;
                }
            );
        }



        form.reset();
    }
}