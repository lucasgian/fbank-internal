import { Injectable } from '@angular/core'
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

import { AuthenticationService } from './authentication'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate() {
        const currentUser = this.authenticationService.currentUserValue
        if (currentUser) {
            // logged in so return true
            return true
        }

        // not logged in so redirect to login page with the return url
        window.location.href = 'http://localhost:3000'
        return false
    }
}
