import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAgendComponent } from './consulta-agend.component';

describe('ConsultaAgendComponent', () => {
  let component: ConsultaAgendComponent;
  let fixture: ComponentFixture<ConsultaAgendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaAgendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAgendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
