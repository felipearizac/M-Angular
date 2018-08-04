import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
/*
import { IndexComponent } from './component/index';
import { SlideComponent } from './component/slide';
import { ContainerComponent} from './component/container';
import { FooterComponent } from './component/footer';*/
 
@NgModule({
  declarations: [
    AppComponent,
   /* IndexComponent, 
    SlideComponent, 
    ContainerComponent, 
    FooterComponent*/
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
