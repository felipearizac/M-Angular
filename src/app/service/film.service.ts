import { Injectable} from '@angular/core';

import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()

export class ServiceFilm{

     /* Prueba de servicio 

     public ruta_foto = "assets/img/4.jpg";

     prueba(){

          return this.ruta_foto;
     }*/

     /** Peticiones */

     public url:string;

     constructor(private _http:Http){

         this.url = "http://ghibliapi.herokuapp.com/films";

     }

     tomarJsonFilm(){

          return this._http.get(this.url).pipe(map(resultado => resultado.json()));


     }

}
