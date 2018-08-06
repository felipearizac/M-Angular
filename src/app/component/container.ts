import { Component, OnInit } from '@angular/core';

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

               },
               error => {
                    var mensajeError = <any>error;
                    

          });


     }

     ngOnInit(){

          setTimeout(()=>{

          var p = {

               item: 0,
               cajaSlide: document.querySelectorAll("#slide "),
               animacionSlide: "fade", //Efecto de animacion Slide - Fade
               imgSlide: document.querySelectorAll("#slide #contain"),
               avanzar: document.querySelectorAll("#slide #avanzar"),
               retroceder: document.querySelectorAll("#slide #retroceder"),
               velocidadSlide: 3000,
               formatearLoop: false

          }

          

          var m = {

               inicioSlide: function(){

                    p.avanzar["0"].addEventListener("click", m.avanzar)
                    p.retroceder["0"].addEventListener("click", m.retroceder)
                    m.intervalo();

               },

             

               avanzar: function(){

                    if(p.item == p.imgSlide.length-1){

                         p.item = 0;
                    }else{

                         p.item++;
                    }

                    m.movimientoSlide(p.item);

               },

               retroceder: function(){

                    if(p.item == 0){

                                   p.item = p.imgSlide.length-1;
                              }else{

                                   p.item--;
                              }

                              m.movimientoSlide(p.item);
               },

               movimientoSlide: function(item){

                    p.formatearLoop= true;

                    p.cajaSlide["0"].style.left = item * -1 + "%";
                    


                    if(p.animacionSlide == "slide"){

                         p.cajaSlide["0"].style.transition = ".7s left ease-in-out";
                    }

                    if(p.animacionSlide == "fade"){

                         p.imgSlide[""+item].style.opacity = 0;
                         p.imgSlide[""+item].style.transition = ".7s opacity ease-in-out";

                         setTimeout(function(){

                         p.imgSlide[""+item].style.opacity = 1;

                         }, 500)
                    }

               }, 

               intervalo: function(){

                    setInterval(function(){

                         if(p.formatearLoop){

                              p.formatearLoop = false;

                         }else{

                              m.avanzar();

                         }

                    }, p.velocidadSlide)

               }


          }

          m.inicioSlide();
          
              }, 10);
}

}