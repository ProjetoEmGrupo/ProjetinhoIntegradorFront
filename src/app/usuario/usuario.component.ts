import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from 'src/app/service/auth.service';
import { User } from '../model/User';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  user: User = new User()
  idUser: number
  confirmarSenha: string
  tipoUsuario: string
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if(environment.token==''){
      //alert('Seção expirada, faça login novamente')
      this.router.navigate(['/entrar'])
    }
  }
 
  atualizar() {
    this.user.tipo = this.tipoUsuario
    if (this.user.senha != this.confirmarSenha) {
    alert('A senhas estão incorretas.')
    }else{
      this.authService.editar(this.user).subscribe((resp: User) => {
        this.user = resp
    
   
      this.router.navigate(['/inicio'])
      alert('Usuário atualizado com sucesso, faça o login novamente.')
      environment.token = ''
      environment.nome = ''
      environment.foto = ''
      environment.id = 0

      this.router.navigate(['/entrar'])
    })
  }
}
confirmaSenha(event: any) {
  this.confirmarSenha = event.target.value;
  //criando metodo para confirmar senha e quando colocar no formulario vai comparar senha
}

tipoUser(event: any) {
  this.tipoUsuario = event.target.value;
  //aqui guarda o tipo de usuario
}
findByUser(id: number){
  this.authService.getByIdUser(id).subscribe((resp:User)=>{
    this.user = resp
  })
  
}
mensagem(){
  alert('Atualizado com sucesso!')
}
senha(){
  this.user.tipo = this.tipoUsuario
  if (this.user.senha != this.confirmarSenha) {
  alert('A senhas estão incorretas.')
  }else{
    this.authService.editar(this.user).subscribe((resp: User) =>{
      this.user = resp})}

};
}