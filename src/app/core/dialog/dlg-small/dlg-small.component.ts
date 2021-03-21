import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core'
import { FormDialog } from '../../rule/entity/formDailog.class'
import { Button } from '../../rule/interface/button.interface'
import { Dialog } from '../../rule/entity/dialog'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dlg-small',
  templateUrl: './dlg-small.component.html',
  styleUrls: ['./dlg-small.component.scss']
})
export class DlgSmallComponent extends Dialog  {

  @Input() option: FormDialog
  @Input() title: string
  @Input() button: Button
  @Input() code: string

  @Output() displayModalChange = new EventEmitter()
  @Output() eventEmitter = new EventEmitter()
  constructor() {
    super()
  }

  closeModal() {
    this.option.defaultValues()
    this.displayModalChange.emit(false)
  }

  action() {
    this.eventEmitter.emit(this.option.form.value)
    this.option.defaultValues()
    this.displayModalChange.emit(false)
    this.displayModal = false
  }
}
