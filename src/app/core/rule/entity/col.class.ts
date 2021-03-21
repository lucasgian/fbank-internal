export class Col {
    public header: string
    constructor(
        public field: string,
        public placeholder: string,
        public type = 'text',
        public value?: any,
        public required: boolean = Boolean(true),
        public options?: any
    ) {
        this.header = field.charAt(0).toUpperCase() + this.field.slice(1)
    }

}
