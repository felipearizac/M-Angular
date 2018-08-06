import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';

import { IndexComponent } from './component';
import { SlideComponent } from './component/slide';
import { ContainerComponent} from 
'./component/container';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { ScrollComponent } from './component/scroll';
import { FooterComponent } from './component/footer';
 
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent, 
    SlideComponent, 
    ContainerComponent, 
    ScrollComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, 
    Ng2CarouselamosModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
