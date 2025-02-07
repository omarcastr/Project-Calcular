// src/app/resultado/resultado.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadoComponent } from './resultado.component';

describe('ResultadoComponent', () => {
  let component: ResultadoComponent;
  let fixture: ComponentFixture<ResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar el resultado si no es nulo', () => {

    component.resultado = 10;
    fixture.detectChanges();


    const resultadoElement = fixture.nativeElement.querySelector('p');
    expect(resultadoElement).not.toBeNull();
    expect(resultadoElement?.textContent).toContain('10');
  });

  it('no debería mostrar el resultado si es nulo', () => {

    component.resultado = null;
    fixture.detectChanges();

    
    const resultadoElement = fixture.nativeElement.querySelector('p');
    expect(resultadoElement).toBeNull();
  });
});
