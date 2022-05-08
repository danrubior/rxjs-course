import { fromEvent, interval, mergeMap, switchMap } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');
const interval$ = interval(1000);

// Merge Map: Mantiene todas las suscripciones internas activas
// Switch Map: Solo mantiene una suscripcion interna activa
click$
  .pipe(
    // mergeMap(() => interval$
    switchMap(() => interval$)
  )
  .subscribe(console.log);
