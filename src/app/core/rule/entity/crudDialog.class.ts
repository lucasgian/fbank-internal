import { FormDialog } from './formDailog.class'
import { FormGroup, FormBuilder } from '@angular/forms'
import { Col } from './col.class'
import { ApiCommunictionService } from '../../../service/apiCommuniction.service'
import { CrudFacade } from '../facade/crud.facade'
import { Memento } from '../repository/memento'

export class CrudDialog {
  public ACTIONS = {
    add: this.add,
    edit: this.update,
    delete: this.delete
  }
  public cols: Col[] = []
  public exportColumns: any[]
  public formDialog: FormDialog
  public datas: any[]
  public form: FormGroup
  public crudFacade: CrudFacade = new CrudFacade()
  public displayModal: boolean = Boolean(false)
  private service: ApiCommunictionService
  private formBuilder: FormBuilder = new FormBuilder()
  public snapshotData: Memento = new Memento()
  constructor() {}

  public setService(entityName: string, service: ApiCommunictionService) {
    service.setEntityName(entityName)
    this.service = service
  }

  public formOption(action: string) {
    this.formDialog = new FormDialog(
      this.form,
      this.cols,
      action
    )
  }

  public init = (cols: Col[]) => {
    this.cols = cols
    this.exportColumns = this.formatCol()
    this.formOption('action')
    this.get()
  }
/*
  async action(data: any) {
    data.code = this.snapshotData.getStatus().code || data.code
    this.snapshotData.setStatus(data)
    this.datas = await this.ACTIONS[data.action || this.formDialog.action](data, this.service)
  }*/


  /** Action is event update, add or delete
   * @param dataForm form coming from the table
   */
  public action(dataForm) {
   // console.log('dataform', this.formDialog)
  }

  private formatCol = () => {
    return this.cols.map(col => ({ title: col.header, dataKey: col.field }))
  }

  public setForm(formControls) {
    this.form = this.formBuilder.group(formControls)
  }

  public setValuesCol = values => {
    this.cols.map((col, index) => (col.value = values[index]))
  }


  /* methods interaction with api */
  private async get() {
   this.datas = await this.service.get()
  }

  public add(form: any) {
    return this.service.post(form)
  }

  public async update(form: any, service) {
    return await service.update(form)
  }

  public async delete(form: any, service) {
    return service.delete(form)
  }
}
