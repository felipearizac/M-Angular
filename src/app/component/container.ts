import { Component } from '@angular/core';

import { ServiceContain } from '../service/contain.service';

@Component ({

     selector: 'tag-container',
     templateUrl: '../views/container.html',
     providers: [ServiceContain]

})

export class ContainerComponent {

     public containerJson;

     constructor(private _ServiceContain:ServiceContain){

          /*Prueba

          console.log(this._ServiceContain.prueba()) */

          /**Peticiones http */

          

          this._ServiceContain.tomarJsonContainer().subscribe(
               resultado => {

                    this.containerJson = resultado;

                    console.log(this.containerJson);

               },
               error => {
                    var mensajeError = <any>error;
               }
                    

          });


     }

