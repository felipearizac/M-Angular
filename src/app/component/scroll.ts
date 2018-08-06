import { Component, OnInit } from '@angular/core';
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

               },
               error => {
                    var mensajeError = <any>error;
                    

          });


     }

     ngOnInit(){

          setTimeout(()=>{
                                        
               var ps = {

                    posicionScroll: 0,
                    articulos: document.querySelectorAll("#scroll article"),
                    cajaScroll: document.querySelectorAll("#scroll"),
                    cabezote: document.querySelectorAll("header"),
                    boton:  document.querySelectorAll("header .black"),
                    botonera: document.querySelectorAll("nav ul li a"),
                    ruta: null,
                    intervalo: null,
                    destinoScroll: 0,
                    padding: 0
               }


               /*=====  Metodos del scroll  ======*/

               var ms = {

                    inicioScroll: function() {
                         document.addEventListener("scroll", ms.efectoParallax);
                         ps.boton["0"].addEventListener("click", ms.desplazamiento);

                         for (var i = 0; i < ps.botonera.length; i++) {

                              ps.botonera[i].addEventListener("click", ms.desplazamiento);
                         }

                    },

                    efectoParallax: function() {

                         ps.posicionScroll = window.pageYOffset;

                         if (ps.posicionScroll > 100) {

                              ps.cabezote["0"].style.position = "relative";
                              ps.boton["0"].style.position = "fixed";
                              ps.boton["0"].style.display = "block";
                              ps.cabezote["0"].style.zIndex = 4;
                              
                              if(window.matchMedia("(min-width:768px)").matches){
                                   
                                   ps.padding = 80;

                              }else{
                                   
                                   ps.padding = 160;

                              }

                         } else {

                              ps.cabezote["0"].style.position = "relative";
                              ps.cabezote["0"].style.zIndex = 5;
                              ps.boton["0"].style.display = "none";
                              if(window.matchMedia("(min-width:768px)").matches){
                                   
                                   ps.padding = 180;

                              }else{

                                   ps.padding = 280;
                              
                              }
                         }

                         if (ps.posicionScroll > ps.cajaScroll["0"].offsetTop-200) {

                              for (var i = 0; i < ps.articulos.length; i++) {
                                   ps.articulos[" "+i].style.marginLeft = "0%";
                              }

                         } else {

                              for (var i = 0; i < ps.articulos.length; i++) {

                                   if(window.matchMedia("(min-width:768px)").matches){

                                        ps.articulos[" "+i].style.marginLeft = ps.posicionScroll / 22.8 - 100 + "%";
                                   }
                                   
                              }

                         }
                    },

                    desplazamiento: function(ruta) {

                         ruta.preventDefault();

                         ps.ruta = ruta.target.getAttribute("href");

                         ps.destinoScroll = document.querySelector(ps.ruta).offsetTop + ps.padding - 150;

                         ps.intervalo = setInterval(function() {

                              if (ps.posicionScroll < ps.destinoScroll) {

                                   ps.posicionScroll += 100;

                                   if (ps.posicionScroll >= ps.destinoScroll) {

                                        ps.posicionScroll = ps.destinoScroll;

                                        clearInterval(ps.intervalo);
                                   }
                              } else {

                                   ps.posicionScroll -= 100;

                                   if (ps.posicionScroll <= ps.destinoScroll) {

                                        ps.posicionScroll = ps.destinoScroll;

                                        clearInterval(ps.intervalo);
                                   }
                              }

                              window.scrollTo(0, ps.posicionScroll);

                         }, 50)

                    }

               }


               ms.inicioScroll();


          },10);
         
     }

   
}