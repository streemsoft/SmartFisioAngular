import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraAgendComponent } from './cadastra-agend.component';

describe('CadastraAgendComponent', () => {
  let component: CadastraAgendComponent;
  let fixture: ComponentFixture<CadastraAgendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraAgendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraAgendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
