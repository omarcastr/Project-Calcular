// src/app/serie.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { SerieService } from './serie.service';

describe('SerieService', () => {
  let service: SerieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerieService);
  });

  it('debería calcular el término n de la serie correctamente', () => {

    expect(service.calcularTermino(5)).toBeCloseTo(-0.35714285714285715); 

    expect(service.calcularTermino(0)).toBeCloseTo(0);

    expect(service.calcularTermino(1)).toBeCloseTo(0.83, 2);
  });

  it('debería lanzar un error si primo(n+2) es cero', () => {

    expect(() => service.calcularTermino(2)).toThrowError(
      'División por cero: primo(n+2) no puede ser cero.'
    );
  });
});
