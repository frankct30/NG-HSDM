import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IPersona } from './models/Interfaces/ipersona';
import { AFILIADOS } from './mock-afiliados';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class AfiliadosService {

  private Afiliados : IPersona[]
  
  constructor(private http: HttpClient) {
     
    console.log('AfiliadosServices Listo...');

   }

  getAfiliados(){
    this.Afiliados = AFILIADOS;
    return this.Afiliados;
  }
  
}

