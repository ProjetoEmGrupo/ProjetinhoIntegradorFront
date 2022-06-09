import { Categoria } from "./Categoria"
import { Curso } from "./Curso"

export class User{
    public id: number
    public nome: string
    public usuario: string
    public senha: string
    public pronome: string
    public foto: string
   
    public celular:string
    
    public tipo:string
    public curso:Curso
    public categoria: Categoria
}