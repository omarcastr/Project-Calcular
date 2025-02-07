// src/app/serie.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SerieService {

  calcularTermino(n: number): number {
    const fib = this.fibonacci(n);
    const tri = this.triangular(n - 1);
    const pri = this.primo(n + 2);

    if (pri === 0) {
      throw new Error('División por cero: primo(n+2) no puede ser cero.');
    }

    return (5 * fib - 3 * tri) / (2 * pri);
  }

  fibonacci(n: number): number {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let a = 0;
    let b = 1;
    let temp;

    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }

    return b;
  }

  triangular(n: number): number {
    if (n < 0) return 0;
    return (n * (n + 1)) / 2;
  }

  primo(n: number): number {
    if (n < 2) return 0;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return 0;
    }

    return n;
  }
}
