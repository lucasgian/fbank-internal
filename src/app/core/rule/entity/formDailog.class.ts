import { Dialog } from '../interface/dlg.interface'
import { FormGroup } from '@angular/forms'
import { ButtonAction } from './buttonAction.class'

export class FormDialog implements Dialog {
    public button: ButtonAction
    public buttons = {
        add: new ButtonAction(
            'Adicionar',
            'pi pi-fw pi-plus',
            'btn-save-default'
        ),
        edit: new ButtonAction(
            'Editar',
            'pi pi-fw pi-pencil',
            'btn-save-default'
        )
    }
    constructor(
        public form: FormGroup,
        public fields: any[],
        public action: string
    ) {
        this.button = this.buttons[action]
    }

    public defaultValues() {
        this.form.reset()
        this.button = this.buttons.add
    }
}
