import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PrimengModule } from '../shared/primeng/primeng.module'
import { MenuComponent } from './menu.component'
import { MenuRoutingModule } from './menu-routing.module'

@NgModule({
  declarations: [MenuComponent],
  imports: [
    PrimengModule,
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
