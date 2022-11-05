import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasTransurbanoComponent } from './rutas-transurbano.component';

describe('RutasTransurbanoComponent', () => {
  let component: RutasTransurbanoComponent;
  let fixture: ComponentFixture<RutasTransurbanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutasTransurbanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutasTransurbanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
