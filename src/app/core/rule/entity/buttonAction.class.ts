import { Button } from '../interface/button.interface'

export class ButtonAction implements Button {
    constructor(
        public title: string,
        public icon: string,
        public styleClass: string,
        public color?: string
    ) {}
}
