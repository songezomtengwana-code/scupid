import { fAVORITE } from './favorite.model';
export class USER {
    id!:string
    name!: string
    email!:string
    password!: string
    favorites!: fAVORITE[]
}