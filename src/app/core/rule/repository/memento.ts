export class Memento {
    private status: any

    public setStatus(status: any) {
        this.status = status
    }

    public getStatus(): any {
        return this.status
    }
}
