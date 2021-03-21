import { Product } from '../interface/product.interface'
export class ProductStore implements Product {
    public code: string
    constructor(
        public name: string,
        public description: string,
        public price: number = Number(0.0),
        code?: string
    ) {
        this.code = code
    }
}
