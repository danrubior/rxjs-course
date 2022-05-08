import { auditTime, fromEvent, map, pluck, tap } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');

// Muestra el ultimo valor emitido en un intervalo
click$
  .pipe(
    map(({ x }) => x),
    tap(val => console.log('tap ', val)),
    auditTime(2000)
  )
  .subscribe(console.log);
