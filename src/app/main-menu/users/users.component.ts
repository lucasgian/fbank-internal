import { Component, OnInit } from '@angular/core'
import { SystemUser } from '../../core/rule/entity/systemUser.class'
import { Validators, FormControl } from '@angular/forms'
import { CrudDialog } from 'src/app/core/rule/entity/crudDialog.class'
import { Col } from 'src/app/core/rule/entity/col.class'
import { ApiCommunictionService } from 'src/app/service/apiCommuniction.service'
import { CrudFacade } from 'src/app/core/rule/facade/crud.facade'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends CrudDialog implements OnInit {
  PERMISSION = [
    { label: 'Client', value: 'CLIENT' },
    { label: 'Admin', value: 'ADMIN' },
    { label: 'User', value: 'USER' }
  ]
  fileName = 'Users'
  users: SystemUser[] = []
  code: string
  exportColumns
  title = 'Add User'

  constructor(service: ApiCommunictionService) {
    super()
    this.setService('users', service)
    this.setForm({
      code: new FormControl(),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      permission: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
    const options = [...this.PERMISSION, { label: 'Selected Permission', value: '' }]
    this.init([
      new Col('name', 'ex: Marco Paulo'),
      new Col('email', 'ex: marcos.paulo@exemplo.com'),
      new Col('permission', 'ex: Admin', 'dropdow', '', true, options)
    ])
  }

  showEdit(user) {
    const { code, name, email, permission } = user
    this.snapshotData.setStatus(user)
    console.log('user', user)
    this.setValuesCol([name, email, permission])
    this.formOption('edit')
    this.displayModal = true
  }

}
