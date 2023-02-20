import { SIZE } from './size.model';
export class PRODUCT {
    product_id!: string
    name!: string
    image!: string
    shop!: string
    url!:string
    price!: number
    sizes!: SIZE[] 
    tags!: string[]
    discount!: number
    discount_shown!: true
}