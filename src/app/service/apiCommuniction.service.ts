import { ConnectService } from '../core/rule/interface/connectService.interface'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class ApiCommunictionService implements ConnectService {
    private entityName: string
    constructor(private http: HttpClient) {
    }

    public setEntityName(entityName) {
        this.entityName = entityName
    }

    public get(): Promise<any> {
        return this.http.get<any>(`assets/mocks/${this.entityName}.json`)
            .toPromise()
            .then(res => ({
                [this.entityName]: res.data[this.entityName] as any[]
            }))
            .then(data => data[this.entityName])
    }

    public update(newDataForm: any): Promise<any> {
        const { code } = newDataForm

        return this.http.get<any>(`assets/mocks/${this.entityName}.json`)
            .toPromise()
            .then(res => ({
                [this.entityName]: [...res.data[this.entityName].map(data => {
                    if (data.code === code) {
                        return newDataForm
                    }
                    return data
                })] as any[]
            }))
            .then(data => data[this.entityName])
    }

    public post(form: any): Promise<any> { return
    }
    public delete(dataForm: any): Promise<any> {
        const { code } = dataForm
        return this.http.get<any>(`assets/mocks/${this.entityName}.json`)
            .toPromise()
            .then(res => ({
                [this.entityName]: [...res.data[this.entityName].reduce((allDatas, data) => {
                    if (!allDatas) { allDatas = [] }

                    if (data.code !== code) {
                        allDatas.push(data)
                    }
                    return allDatas
                }, [])] as any[]
            }))
            .then(data => data[this.entityName])
    }
}
