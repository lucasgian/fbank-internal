import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PrimengModule } from '../shared/primeng/primeng.module'
import { MainMenuComponent } from './main-menu.component'
import { MainMenuRoutingModule } from './main-menu-routing.module'
import { WorkflowComponent } from './workflow/workflow.component'
import { UsersComponent } from './users/users.component'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'
import { ListTableComponent } from '../core/list-table/list-table.component'
import { ActionsPossibiliteInListTableComponent } from '../core/actions-possibilite-in-list-table/actions-possibilite-in-list-table.component'
import { DlgSmallComponent } from '../core/dialog/dlg-small/dlg-small.component'
import { DlgExportComponent } from '../core/dialog/dlg-export/dlg-export.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    MainMenuComponent,
    WorkflowComponent,
    UsersComponent,
    ListTableComponent,
    ActionsPossibiliteInListTableComponent,
    DlgSmallComponent,
    DlgExportComponent
  ],
  imports: [
    PrimengModule,
    CommonModule,
    MainMenuRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class MainMenuModule { }
