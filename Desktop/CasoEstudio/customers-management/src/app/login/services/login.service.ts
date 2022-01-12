import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  authenticate(user : string= '',pwd: string= ''){
    user = user.trim();
    pwd = pwd.trim();}


  constructor() { }
}
