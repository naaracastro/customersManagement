import { LoginService } from './../services/login.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  @ViewChild('txtUser') txtUser!: ElementRef<HTMLInputElement>
  @ViewChild('txtPwd') txtPwd!: ElementRef<HTMLInputElement>
  user: any;
  pwd:any;

  constructor(
    private loginService : LoginService,
  ) {}

  btnLogin() {
    this.user = this.txtUser.nativeElement.value;
    this.pwd = this.txtPwd.nativeElement.value;
    this.validate();
  }

  validate() {

    if (this.user == "" && this.pwd == "") {
      /*Mostrar en pantalla*/
      console.log('Datos en blanco');
    } else if (this.user == "") {
      console.log('User Required');
    } else if (this.pwd == "") {
      console.log('Password Required');
    }else{
      this.authenticate();
    }
  }

  authenticate() {
    /*Llamada al servicio*/
    console.log('Llamada al servicio - '  + "User: " + this.user + "  Password:  " + this.pwd);
    this.loginService.authenticate(this.user,this.pwd);
  }


}
