import { HttpClient } from '@angular/common/http'

export interface ConnectService {
    get(): any
    post(form: any): Promise<any>
    update(form: any): Promise<any>
    delete(form: any): Promise<any>
}
