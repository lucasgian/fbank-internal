import { Component, Input } from '@angular/core'
import { Dialog } from '../../rule/entity/dialog'
import { ngxCsv } from 'ngx-csv/ngx-csv'

@Component({
  selector: 'app-dlg-export',
  templateUrl: './dlg-export.component.html',
  styleUrls: ['./dlg-export.component.scss']
})
export class DlgExportComponent extends Dialog {

  @Input() datas
  @Input() fileName: string
  @Input() exportWay = [
    { name: 'CSV', icon: 'pi pi-file' },
    { name: 'PDF', icon: 'pi pi-file-pdf' },
    { name: 'EXCEL', icon: 'pi pi-file-excel' }
  ]
  @Input() exportColumns
  selectedExport
  constructor() {
    super()
  }

  export() {
    switch (this.selectedExport) {
      case 'CSV':
        this.exportCsv()
        break
      case 'PDF':
        this.exportPdf()
        break
      case 'EXCEL':
        this.exportExcel()
        break
    }

    this.displayModal = false
  }

  exportCsv() {
    const csv = new ngxCsv(this.datas, this.fileName)
  }

  exportPdf() {
    import('jspdf').then(jsPDF =>
      import('jspdf-autotable').then(x => {
        const doc = new jsPDF.default(0, 0)
        doc.autoTable(this.exportColumns, this.datas)
        doc.save(`${this.fileName}.pdf`)
      })
    )
  }

  exportExcel() {
    import('xlsx').then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.datas)
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] }
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' })
      this.saveAsExcelFile(excelBuffer, this.fileName)
    })
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then(FileSaver => {
      const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
      const EXCEL_EXTENSION = '.xlsx'
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      })
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION)
    })
  }
}
