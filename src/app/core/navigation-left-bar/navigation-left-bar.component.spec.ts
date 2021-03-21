import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLeftBarComponent } from './navigation-left-bar.component';

describe('NavigationLeftBarComponent', () => {
  let component: NavigationLeftBarComponent;
  let fixture: ComponentFixture<NavigationLeftBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationLeftBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationLeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
