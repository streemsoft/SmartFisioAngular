import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadPacComponent } from './cad-pac.component';

describe('CadPacComponent', () => {
  let component: CadPacComponent;
  let fixture: ComponentFixture<CadPacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadPacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadPacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
