import { Component, OnInit } from '@angular/core'
import {MenuItem} from 'primeng/api'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  items: MenuItem[]

  names = ['home','wifi','settings','options','search','cloud','stopwatch','apps','map','locate','compass','create','call']

  ngOnInit() {
      this.items = [{
          label: 'File',
          items: [
              {label: 'New', icon: 'pi pi-fw pi-plus'},
              {label: 'Download', icon: 'pi pi-fw pi-download'}
          ]
      },
      {
          label: 'Edit',
          items: [
              {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
              {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
          ]
      }]
  }

}
