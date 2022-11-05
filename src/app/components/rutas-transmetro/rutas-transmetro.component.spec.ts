import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasTransmetroComponent } from './rutas-transmetro.component';

describe('RutasTransmetroComponent', () => {
  let component: RutasTransmetroComponent;
  let fixture: ComponentFixture<RutasTransmetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutasTransmetroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutasTransmetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
