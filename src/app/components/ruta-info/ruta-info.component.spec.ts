import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaInfoComponent } from './ruta-info.component';

describe('RutaInfoComponent', () => {
  let component: RutaInfoComponent;
  let fixture: ComponentFixture<RutaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
