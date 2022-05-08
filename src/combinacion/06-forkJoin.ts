import { delay, forkJoin, interval, of, take } from 'rxjs';

const numbers$ = of(1, 2, 3, 4);
const interval$ = interval(1000).pipe(take(3));
const letters$ = of('a', 'b', 'c').pipe(delay(3500));

// forkJoin([numbers$, interval$, letters$]).subscribe(console.log);

// forkJoin([numbers$, interval$, letters$]).subscribe(resp => {
//   console.log('numeros: ', resp[0]);
//   console.log('intervalo: ', resp[1]);
//   console.log('letras: ', resp[2]);
// });

// forkJoin({ numbers$, interval$, letters$ }).subscribe(resp => {
//   console.log(resp.letters$);
//   console.log(resp);
// });

// Combinar varios observables y emite cuando TERMINAN todos los observables
forkJoin({ num: numbers$, int: interval$, let: letters$ }).subscribe(
  resp => {
    console.log(resp.let);
    console.log(resp);
  }
);
