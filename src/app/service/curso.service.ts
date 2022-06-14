import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Curso } from '../model/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new  HttpHeaders().set('Authorization', environment.token) 
  }

  getAllCurso(): Observable<Curso[]>{
    return this.http.get<Curso[]>('http://localhost:8080/curso', this.token)
  }

  postCurso(curso:Curso): Observable<Curso>{
    return this.http.post<Curso>('http://localhost:8080/curso', curso, this.token)
  }

  getByIdCurso(id: number): Observable<Curso>{
    return this.http.get<Curso>(`http://localhost:8080/curso/${id}`, this.token)
  }

  getByNomeCurso(nome: string): Observable<Curso[]>{
    return this.http.get<Curso[]>(`http://localhost:8080/curso/nome${nome}`, this.token)
  }

  putCurso(curso: Curso): Observable<Curso>{
    return this.http.put<Curso>('http://localhost:8080/curso', curso, this.token)
  }

  deleteCurso(id: number): Observable<Curso>{
  return this.http.delete<Curso>(`http://localhost:8080/curso/${id}`, this.token)
  }
}

