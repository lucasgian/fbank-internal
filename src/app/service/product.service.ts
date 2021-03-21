import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { ConnectService } from '../core/rule/interface/connectService.interface'
import { Product } from '../core/rule/interface/product.interface'
import { ProductStore } from '../core/rule/entity/productStore.class'

@Injectable({
    providedIn: 'root'
})
export class ProductService implements ConnectService {
    private entityName = 'products'

    constructor(private http: HttpClient) {}

    public get(): Promise<any> {
        return this.http.get<any>(`assets/mocks/${this.entityName}.json`)
            .toPromise()
            .then(res => ({
                [this.entityName]: res.data[this.entityName] as any[]
            }))
            .then(data => data)
    }

    public post(productForm: ProductStore): Promise<any> {
        const { name, description, price } = productForm

        return this.http.get<any>('assets/mocks/products.json')
            .toPromise()
            .then(res => ({
                products: [...res.data.products, new ProductStore(name, description, price, '' + res.data.products.length)] as Product[]
            }))
            .then(data => data)
    }

    public update(productForm: ProductStore): Promise<any> {
        const { code, name, description, price } = productForm

        return this.http.get<any>('assets/mocks/products.json')
            .toPromise()
            .then(res => ({
                products: [...res.data.products.map(product => {
                    if (product.code === code) {
                        return new ProductStore(name, description, price, code)
                    }
                    return product
                })] as Product[]
            }))
            .then(data => data)
    }

    public delete(productForm: ProductStore): Promise<any> {
        const { code } = productForm
        return this.http.get<any>('assets/mocks/products.json')
            .toPromise()
            .then(res => ({
                products: [...res.data.products.reduce((allProducts, product) => {
                    if (!allProducts) { allProducts = [] }

                    if (product.code !== code) {
                        allProducts.push(product)
                    }
                    return allProducts
                }, [])] as Product[]
            }))
            .then(data => data)
    }
}
