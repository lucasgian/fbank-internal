import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {
  data: any
  @Input() datas
  @Input() cols
  @Output() eventEmitter: EventEmitter<FormGroup> = new EventEmitter<FormGroup>()
  @Output() editEventEmitter: EventEmitter<FormGroup> = new EventEmitter<FormGroup>()

  constructor() { }

  items = [
    {
      label: 'Update',
      icon: 'pi pi-refresh',
      command: () => { }
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      command: () => {
        this.data.action = 'delete'
        this.eventEmitter.emit(this.data)
      }
    }
  ]

  ngOnInit(): void {
  }

  registerData(data) {
    this.data = data
  }

  edit(data) {
    //data.action = 'edit'
    this.editEventEmitter.emit(data)
  }
}
