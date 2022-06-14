import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Curso } from '../model/Curso';
import { CursoService } from '../service/curso.service';

@Component({
  selector: 'app-curso-edit',
  templateUrl: './curso-edit.component.html',
  styleUrls: ['./curso-edit.component.css']
})
export class CursoEditComponent implements OnInit {
  curso: Curso= new Curso()
  constructor(
    private cursoService: CursoService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdCurso(id)
  }
  findByIdCurso(id: number){
    this.cursoService.getByIdCurso(id).subscribe((resp: Curso)=>{
      this.curso = resp
    })
  
  }
  atualizar(){
    this.cursoService.putCurso(this.curso).subscribe((resp: Curso)=>{
        this.curso = resp
        alert("Curso atualizado com sucesso!")
        this.router.navigate(['/cadastra-curso'])
    })
  }

  }


