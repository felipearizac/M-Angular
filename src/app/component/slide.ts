import { Component } from '@angular/core';

import { ServiceContainer }from '../service/container.service';

@Component({
     selector: 'tag-slide',
     templateUrl: '../views/slide.html',
     providers: [ServiceContainer]
})

export class SlideComponent {

     constructor(private __ServiceContainer: ServiceContainer){

          console.log(this.__ServiceContainer.prueba())
          

     }
}