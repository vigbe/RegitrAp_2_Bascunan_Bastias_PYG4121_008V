import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*import { FilmGhibli } from '../interfaces/interfaces';*/
import { RespuestaToHeadLines } from '../interfaces/interfaces';




@Injectable({
  providedIn: 'root'
})

export class NoticiasService {

  constructor(private http: HttpClient) {

  }

 /* getGhibli(){
    return this.http.get <FilmGhibli> ('https://ghibliapi.herokuapp.com/films')
  }*/

  
  getCalendario(){

    return this.http.get<RespuestaToHeadLines>  ('https://apis.digital.gob.cl/fl/feriados')
  }

}
