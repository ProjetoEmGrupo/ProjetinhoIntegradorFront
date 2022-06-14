import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { CursosComponent } from './cursos/cursos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { CadastraCursoComponent } from './cadastra-curso/cadastra-curso.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CursoEditComponent } from './curso-edit/curso-edit.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';




@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,
    RodapeComponent,

    CadastrarComponent,
     EntrarComponent,
     InicioComponent,
     CursosComponent,
     CategoriasComponent,
     ParceirosComponent,
     CadastraCursoComponent,
     UsuarioComponent,
     CursoEditComponent,
     SobreNosComponent
     
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
