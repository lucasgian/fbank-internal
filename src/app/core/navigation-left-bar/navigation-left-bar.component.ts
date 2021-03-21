import { Component, Input, ViewChild, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navigation-left-bar',
  templateUrl: './navigation-left-bar.component.html',
  styleUrls: ['./navigation-left-bar.component.scss']
})
export class NavigationLeftBarComponent implements OnInit {
  positionSelected = 0
  options = [
    { title: 'Pedidos', subtitle: 'Pedidos', icon: 'pi pi-fw pi-bell', selected: false, link: '/sales' },
    { title: 'Users', subtitle: 'Users', icon: 'pi pi-fw pi-user', selected: false, link: '/users' },
    { title: 'Setting', subtitle: 'Setting', icon: 'pi pi-fw pi-cog', selected: false, link: '/setting' },
    { title: 'Products', subtitle: 'Products', icon: 'pi pi-fw pi-shopping-cart', selected: false, link: '/products' },
    { title: 'Categories', subtitle: 'Categories', icon: 'pi pi-fw pi-tags', selected: false, link: '/categories' },
    { title: 'Sair', subtitle: 'Sair', icon: 'pi pi-fw pi-sign-out', selected: false, link: '/logout' }
  ]

  @Input() hidden = Boolean(true)

  constructor(router: Router) {
    router.events.subscribe((navegation: any) => {
      if (!navegation.url) {
        return
      }

      this.selectedOption(this.options.findIndex(option => option.link === navegation.url))
    })
  }

  ngOnInit(): void { }

  selectedOption(position: number) {
    this.options[this.positionSelected].selected = false
    this.positionSelected = position
    this.options[this.positionSelected].selected = true
  }

}
