// src/app/app.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { SerieService } from './service/serie.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let serieService: SerieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, AppComponent,FormularioComponent, ResultadoComponent],
      providers: [SerieService],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    serieService = TestBed.inject(SerieService);
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería calcular el término n y actualizar el resultado', () => {

    spyOn(serieService, 'calcularTermino').and.returnValue(10);

    component.onCalcular(5);
    fixture.detectChanges();

    expect(component.resultado).toBe(10);
  });

  it('debería manejar errores al calcular el término n', () => {

    spyOn(serieService, 'calcularTermino').and.throwError('Error de cálculo');

    component.onCalcular(2);
    fixture.detectChanges();

    expect(component.resultado).toBeNull();
  });
});
