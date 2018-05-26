import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuPacComponent } from './manu-pac.component';

describe('ManuPacComponent', () => {
  let component: ManuPacComponent;
  let fixture: ComponentFixture<ManuPacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManuPacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
