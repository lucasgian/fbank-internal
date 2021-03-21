import { Input } from '@angular/core'

export class Dialog {

  @Input() displayModal: boolean
  constructor() { }

  showDisplayModal() {
    this.displayModal = true
  }
}
