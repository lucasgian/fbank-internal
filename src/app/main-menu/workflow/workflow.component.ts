import { Component, OnInit } from '@angular/core'
import { SaleService } from '../../service/sale.service'

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
 
  account
  constructor(private saleService: SaleService) { }

  ngOnInit() {
    this.account = JSON.parse(localStorage.getItem('token'))
  }

  logout() {
    window.location.href = 'http://localhost:3000'
  }
}
