import { LoginResponse } from './../interface/login.interface';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private jsonURL = 'assets/SampleJson.json';
  url = 'http://localhost:3000/data';

  constructor(private http: HttpClient) {}

  public getJSON(): Observable<any> {
    return this.http.get<LoginResponse>(this.jsonURL).pipe(
      tap((data: any) => console.log('Respuesta Servicio : ', data)
      ),
      catchError(this.handleError('NOK Respuesta Servicio', []))
    );
  }

   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  isAuthenticated(): boolean {
    return true;
  }
}
