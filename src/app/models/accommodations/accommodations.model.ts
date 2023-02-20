import { ImportantLinks } from "./important_links.accommodations.model"

export class RestaurantsModel {
    image!: string
    name!: string
    description!: string
    rate!: number
    url!: string
    important_links!: ImportantLinks[]
}