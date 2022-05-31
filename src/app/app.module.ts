import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
component-menu-rodape
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
 main

@NgModule({
  declarations: [
    AppComponent,
component-menu-rodape
    MenuComponent,
    RodapeComponent

    CadastrarComponent
 main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
