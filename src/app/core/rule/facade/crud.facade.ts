import { ApiCommunictionService } from 'src/app/service/apiCommuniction.service'

export class CrudFacade {
    private service: ApiCommunictionService

    public formSetting(entityName: string, service: ApiCommunictionService) {
        service.setEntityName(entityName)
        this.service = service
    }

    public get() {
        return this.service.get()
    }
}
