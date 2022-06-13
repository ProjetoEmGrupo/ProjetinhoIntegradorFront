import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  nome = environment.nome
  celular=environment.celular
  tipo=environment.tipo
  usuario=environment.usuario
  foto = environment.foto
  constructor(private router: Router) { }

  ngOnInit(){
    if(environment.token==''){
      //alert('Seção expirada, faça login novamente')
      this.router.navigate(['/entrar'])
    }
  }

}
