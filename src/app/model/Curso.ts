import { Categoria } from "./Categoria"
import { Usuario } from "./Usuario"

export class Curso{
    public id: number
    public nome: string
    public professor: string
    public qtvagas:string
    public duracao:string
    public usuario:Usuario
    public categoria: Categoria

}