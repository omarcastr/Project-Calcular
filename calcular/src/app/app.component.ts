import { Component } from '@angular/core';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { SerieService } from './service/serie.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioComponent, ResultadoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  resultado: number | null = null;
  fibonacci: number | null = null;
  triangular: number | null = null;
  primo: number | null = null;

  constructor(private serieService: SerieService) {}

  onCalcular(n: number): void {
    try {
      this.resultado = this.serieService.calcularTermino(n);
      this.fibonacci = this.serieService.fibonacci(n);
      this.triangular = this.serieService.triangular(n);
      this.primo = this.serieService.primo(n);
    } catch (error) {
      console.error(error);
      this.resultado = null;
    }
  }
}
