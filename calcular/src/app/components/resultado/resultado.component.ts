// src/app/resultado/resultado.component.ts
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  imports: [CommonModule],
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent {
  @Input() resultado: number | null = null;
  @Input() fibonacci: number | null = null;
  @Input() primo: number | null = null;
  @Input() triangular: number | null = null;
}
