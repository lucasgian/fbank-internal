import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlgSmallComponent } from './dlg-small.component';

describe('DlgSmallComponent', () => {
  let component: DlgSmallComponent;
  let fixture: ComponentFixture<DlgSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlgSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlgSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
