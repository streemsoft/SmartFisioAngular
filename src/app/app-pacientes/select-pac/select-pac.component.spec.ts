import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPacComponent } from './select-pac.component';

describe('SelectPacComponent', () => {
  let component: SelectPacComponent;
  let fixture: ComponentFixture<SelectPacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
