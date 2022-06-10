import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ParceirosComponent } from './parceiros/parceiros.component';

const routes: Routes = [
  { path: "", redirectTo: "entrar", pathMatch: "full" },
  
  { path: "entrar", component: EntrarComponent },
  { path: "cadastrar", component: CadastrarComponent },
  { path: "inicio", component: InicioComponent},
  {path: "parceiros", component:ParceirosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
