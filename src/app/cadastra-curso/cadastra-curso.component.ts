import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Curso } from '../model/Curso';
import { CursoService } from '../service/curso.service';

@Component({
  selector: 'app-cadastra-curso',
  templateUrl: './cadastra-curso.component.html',
  styleUrls: ['./cadastra-curso.component.css']
})
export class CadastraCursoComponent implements OnInit {

  curso: Curso = new Curso()
  listaCurso: Curso[]
  constructor(
    private router: Router,
    private cursoService: CursoService
  ) { }

  ngOnInit() {
    
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.findAllCurso()
  }
  findAllCurso(){
    this.cursoService.getAllCurso().subscribe((resp: Curso[])=>{
      this.listaCurso = resp
    })
  }
  cadastrar(){
    this.cursoService.postCurso(this.curso).subscribe((resp: Curso)=>{
      this.curso = resp
      alert("Curso cadastrado com sucesso!")
      this.findAllCurso()
      this.curso = new Curso()
    })
  }
  }


