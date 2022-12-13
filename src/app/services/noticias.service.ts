import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*import { FilmGhibli } from '../interfaces/interfaces';*/
import { RespuestaFeriados } from '../interfaces/interfaces';




@Injectable({
  providedIn: 'root'
})

export class NoticiasService {

  constructor(private http: HttpClient) {

  }

 /* getGhibli(){
    return this.http.get <FilmGhibli> ('https://ghibliapi.herokuapp.com/films')
  }*/

  
  getFeriado(){
    return this.http.get<RespuestaFeriados>('https://api.victorsanmartin.com/feriados/en.json')
  }

}
