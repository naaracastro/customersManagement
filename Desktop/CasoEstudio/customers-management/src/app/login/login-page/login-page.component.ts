import { Data, LoginResponse } from './../interface/login.interface';
import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  public loginResponse: LoginResponse = <LoginResponse>{};
  public listarTablaUsuario: Data = <Data>{};
  dataSubscription: Subscription = new Subscription();

  dataArreglo: any;
  public loginForm: {
    user: {
      val: string;
      error: string;
      isValid: () => boolean;
    };

    password: {
      val: string;
      error: string;
      isValid: () => boolean;
    };
  };

  constructor(private loginService: LoginService, private router: Router) {
    this.loginForm = {
      user: {
        val: '',
        error: 'Requerido User',
        isValid() {
          var valid = true;

          if (this.val === '') {
            this.error = 'Requerido User';
            valid = false;
          }

          return valid;
        },
      },

      password: {
        val: '',
        error: 'Requerido Pass',
        isValid() {
          var valid = true;

          if (this.val === '') {
            this.error = 'Requerido Pass';
            valid = false;
          }

          return valid;
        },
      },
    };
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  btnLogin() {
    this.loginService.getJSON();
    this.dataSubscription = this.loginService.getJSON().subscribe((res) => {
      if (this.loginResponse == undefined) {
        console.log('Objeto Vacio');
      } else {
        this.loginResponse = res;
        console.log(this.loginResponse);
      }


    });
  }

  navegarAFormulario() {
    this.router.navigateByUrl('pruebaNav');
  }

  get isValidForm() {
    return this.loginForm.user.isValid() && this.loginForm.password.isValid();
  }
}
