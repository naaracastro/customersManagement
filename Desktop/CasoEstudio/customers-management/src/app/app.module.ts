//import { PruebasNavComponent } from './login/pruebas-nav/pruebas-nav.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
const appRoutes: Routes = [
   { path: 'login', component: LoginPageComponent },
   //{ path: 'pruebaNav', component: PruebasNavComponent },
   { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: '**', redirectTo: '/login'}
 ];


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent, FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
