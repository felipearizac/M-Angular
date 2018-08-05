import { Injectable} from '@angular/core';

import { Http, Response, Headers } from '@angular/http';

import { Observable } from "rxjs";
import 'rxjs';

@Injectable()

export class ServiceContainer{

     /* Prueba de servicio */

     public ruta_foto = "assets/img/4.jpg";

     prueba(){

          return this.ruta_foto;
     }
}