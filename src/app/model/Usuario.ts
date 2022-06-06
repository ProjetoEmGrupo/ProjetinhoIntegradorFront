import { Categoria } from "./Categoria"
import { Curso } from "./Curso"

export class Usuario{
    public id: number
    public nome: string
    public usuario: string
    public senha: string
    public pronome: string
    public foto: string
    public dtnascimento: Date
    public celular:string
    public endereco:string
    public tipo:string
    public curso:Curso
    public categoria: Categoria
}