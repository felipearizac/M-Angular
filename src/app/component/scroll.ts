import { Component } from '@angular/core';
import { ServiceFilm } from '../service/film.service';

@Component({
     selector: 'tag-scroll',
     templateUrl: '../views/scroll.html',
     providers: [ServiceFilm]

})

export class ScrollComponent {

     public FilmJson;

     constructor(private _ServiceFilm:ServiceFilm){

          /*Prueba

          console.log(this._ServiceContain.prueba()) */

          /**Peticiones http */

          

          this._ServiceFilm.tomarJsonFilm().subscribe(
               resultado => {

                    this.FilmJson = resultado;

                    console.log(this.FilmJson);

               },
               error => {
                    var mensajeError = <any>error;
                    

          });


     }

}