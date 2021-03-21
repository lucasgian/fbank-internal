import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { ConnectService } from '../core/rule/interface/connectService.interface'
import { User } from '../core/rule/interface/user.interface'
import { SystemUser } from '../core/rule/entity/systemUser.class'
import { ApiCommunictionService } from './apiCommuniction.service'

export class UserService  {


    /*
    get2(): Promise<any> {

        return this.http.get<any>(`assets/mocks/${this.entityName}.json`)
            .toPromise()
            .then(res => ({
                [this.entityName]: res.data[this.entityName] as any[]
            }))
            .then(data => data)
    }*/
/*
    post(userForm: SystemUser): Promise<any> {
        const { name, email, permission } = userForm

        return this.http.get<any>('assets/mocks/users.json')
            .toPromise()
            .then(res => ({
                users: [...res.data.users, new SystemUser(name, email, permission, '' + res.data.users.length)] as User[]
            }))
            .then(data => data)
    }

    update(userForm: SystemUser): Promise<any> {
        const { code, name, email, permission } = userForm

        return this.http.get<any>('assets/mocks/users.json')
            .toPromise()
            .then(res => ({
                users: [...res.data.users.map(user => {
                    if (user.code === code) {
                        return new SystemUser(name, email, permission, code)
                    }
                    return user
                })] as User[]
            }))
            .then(data => data)
    }*/
/*
    delete(userForm: SystemUser): Promise<any> {
        const { code } = userForm
        return this.http.get<any>('assets/mocks/users.json')
            .toPromise()
            .then(res => ({
                users: [...res.data.users.reduce((allUsers, user) => {
                    if (!allUsers) { allUsers = [] }

                    if (user.code !== code) {
                        allUsers.push(user)
                    }
                    return allUsers
                }, [])] as User[]
            }))
            .then(data => data)
    }*/
}
