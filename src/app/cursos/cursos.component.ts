import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(environment.token==''){
      //alert('Seção expirada, faça login novamente')
      this.router.navigate(['/entrar'])
    }
  }

}
