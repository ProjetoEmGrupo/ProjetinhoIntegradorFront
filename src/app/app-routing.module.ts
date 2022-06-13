import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CursosComponent } from './cursos/cursos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ParceirosComponent } from './parceiros/parceiros.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  { path: "", redirectTo: "entrar", pathMatch: "full" },

  { path: "entrar", component: EntrarComponent },
  { path: "cadastrar", component: CadastrarComponent },
  { path: "inicio", component: InicioComponent},
  {path: "cursos", component: CursosComponent},
  { path: "inicio", component: InicioComponent },
  { path: "categorias", component: CategoriasComponent },
  {path:"parceiros", component:ParceirosComponent},
  {path:"usuario", component:UsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
