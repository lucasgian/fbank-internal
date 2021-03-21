import { User } from '../interface/user.interface'
export class SystemUser implements User {
    public code: string
    constructor(public name: string, public email, public permission: string, code?: string) {
        this.code = code
    }
}
