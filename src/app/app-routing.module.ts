import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main-menu/main-menu.module').then(m => m.MainMenuModule)
  } /*,
  {
    path: 'clock',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'navigation',
    loadChildren: () => import('./menu-nav-bar/menu-nav-bar.module').then(m => m.MenuNavBarModule)
  } */
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
