import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { MainMenuComponent } from './main-menu.component'
import { UsersComponent } from './users/users.component'
import { AuthGuard } from '../shared/auth/guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: MainMenuComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainMenuRoutingModule { }
