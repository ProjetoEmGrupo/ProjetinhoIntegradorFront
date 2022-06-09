import { Categoria } from "./Categoria"
import { User } from "./User"

export class Curso{
    public id: number
    public nome: string
    public professor: string
    public qtvagas:string
    public duracao:string
    public usuario:User
    public categoria: Categoria

}