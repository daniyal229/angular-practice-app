export class Recipe {
    
    id: number 
    title: string
    thumbnail: string
    ingredients: {
        name: string
    }[]

    constructor(obj) {
        Object.assign(this,obj)
    }
}