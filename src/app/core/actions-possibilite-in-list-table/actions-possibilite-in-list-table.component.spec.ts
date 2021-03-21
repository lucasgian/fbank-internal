import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsPossibiliteInListTableComponent } from './actions-possibilite-in-list-table.component';

describe('ActionsPossibiliteInListTableComponent', () => {
  let component: ActionsPossibiliteInListTableComponent;
  let fixture: ComponentFixture<ActionsPossibiliteInListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsPossibiliteInListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsPossibiliteInListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
