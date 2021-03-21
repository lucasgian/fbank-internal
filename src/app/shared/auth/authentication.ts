import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { CookieService } from 'ngx-cookie'
import jwtDecode from 'jwt-decode'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>
    public currentUser: Observable<any>

    constructor(private http: HttpClient, private cookieService: CookieService) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')))
        this.currentUser = this.currentUserSubject.asObservable()
    }

    public get currentUserValue(): string | null {
        if (this.cookieService.get('token')) {
            localStorage.setItem('token', JSON.stringify(jwtDecode(this.cookieService.get('token'))))
            return jwtDecode(this.cookieService.get('token'))
        }
        return null
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser')
        this.currentUserSubject.next(null)
    }
}
