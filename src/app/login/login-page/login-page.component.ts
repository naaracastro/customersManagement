import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})

export class LoginPageComponent {
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

  constructor() {
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

    //private loginService : LoginService
  }

   btnLogin() {
   /*   this.user = this.txtUser.nativeElement.value;
    this.pwd = this.txtPwd.nativeElement.value;
     this.validate(); */
   }

  // validate() {

  //   if (this.user == "" && this.pwd == "") {
  //     /*Mostrar en pantalla*/
  //     console.log('Datos en blanco');
  //   } else if (this.user == "") {
  //     console.log('User Required');
  //   } else if (this.pwd == "") {
  //     console.log('Password Required');
  //   }else{
  //     this.authenticate();
  //   }
  // }

  // authenticate() {
  //   /*Llamada al servicio*/
  //   //var hash = md5('value')
  //   console.log('Llamada al servicio - '  + "User: " + this.user + "  Password:  " + this.pwd);
  //   this.loginService.authenticate(this.user,this.pwd);
  // }

  get isValidForm() {
    return this.loginForm.user.isValid() && this.loginForm.password.isValid();
  }
}
