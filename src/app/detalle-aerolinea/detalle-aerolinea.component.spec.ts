import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAerolineaComponent } from './detalle-aerolinea.component';

describe('DetalleAerolineaComponent', () => {
  let component: DetalleAerolineaComponent;
  let fixture: ComponentFixture<DetalleAerolineaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleAerolineaComponent]
    });
    fixture = TestBed.createComponent(DetalleAerolineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
