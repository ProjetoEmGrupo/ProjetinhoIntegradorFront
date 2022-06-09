import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: UsuarioLogin = new UsuarioLogin()
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }
  entrar() {

    this.auth.entrar(this.userLogin).subscribe({
      next: (resp: UsuarioLogin) => {
        this.userLogin = resp
        this.router.navigate(["/inicio"])
        alert('Bem vindo(a)!')
      }, error: erro => {
        if (erro.status == 500 || erro.status == 401) {
          alert('ERRO! Usuário ou senha inválidos!')
        }
      },
    });
  }
}
