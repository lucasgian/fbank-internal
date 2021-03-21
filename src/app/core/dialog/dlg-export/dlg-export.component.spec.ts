import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgExportComponent } from './dlg-export.component'

describe('DlgExportComponent', () => {
  let component: DlgExportComponent
  let fixture: ComponentFixture<DlgExportComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgExportComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgExportComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
