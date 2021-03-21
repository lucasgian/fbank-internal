import { Component, OnInit, Input, EventEmitter } from '@angular/core'
import { FormControl, FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-actions-possibilite-in-list-table',
  templateUrl: './actions-possibilite-in-list-table.component.html',
  styleUrls: ['./actions-possibilite-in-list-table.component.scss']
})
export class ActionsPossibiliteInListTableComponent implements OnInit {

  insertDisplayModal: boolean = Boolean(false)
  exportDisplayModal: boolean = Boolean(false)
  userForm: FormGroup
  fileName: string
  @Input() datas: []
  constructor() { }

  ngOnInit(): void {
  }

  showInsertModalDialog() {
    this.insertDisplayModal = true
  }

  showExportModalDialog() {
    this.exportDisplayModal = true
  }

}
