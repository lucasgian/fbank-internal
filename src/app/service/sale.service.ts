import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Sale } from '../core/rule/interface/sale.interface'
import { Status } from '../core/rule/interface/status.interface'
@Injectable()
export class SaleService {
/*
    brands: string[] = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];

    colors: string[] = ['Black', 'White', 'Red', 'Blue', 'Silver', 'Green', 'Yellow'];
*/
    constructor(private http: HttpClient) { }
/*
    getCarsSmall() {
        return this.http.get<any>('assets/cars-small.json')
        .toPromise()
        .then(res => <Car[]>res.data)
        .then(data => { return data; });
    }*/

    getSales() {
        return this.http.get<any>('assets/mocks/sales.json')
        .toPromise()
        .then(res => ({
            sales: res.data.sales as Sale[],
            statuses: res.data.statuses as Status[]
        }))
        .then(data => data)
    }

   /* getCarsMedium() {
        return this.http.get<any>('assets/cars-medium.json')
        .toPromise()
        .then(res => <Car[]>res.data)
        .then(data => { return data; });
    }

    getCarsLarge() {
        return this.http.get<any>('assets/cars-large.json')
        .toPromise()
        .then(res => <Car[]>res.data)
        .then(data => { return data; });
    }

    generateCar(): Car {
        return {
            vin: this.generateVin(),
            brand: this.generateBrand(),
            color: this.generateColor(),
            year: this.generateYear()
        }
    }

    generateVin() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    generateBrand() {
        return this.brands[Math.floor(Math.random() * Math.floor(10))];
    }

    generateColor() {
        return this.colors[Math.floor(Math.random() * Math.floor(7))];
    }

    generateYear() {
        return 2000 + Math.floor(Math.random() * Math.floor(19));
    } */
}
