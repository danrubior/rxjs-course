import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from 'rxjs';

const letters$ = of('a', 'b', 'c');

letters$.pipe(
  mergeMap(letter =>
    interval(1000).pipe(
      map(i => letter + i),
      take(3)
    )
  )
);
// .subscribe({
//   next: val => console.log('next: ', val),
//   complete: () => console.log('Complete')
// });

const mousedown$ = fromEvent<MouseEvent>(document, 'mousedown');
const mouseup$ = fromEvent<MouseEvent>(document, 'mouseup');
const interval$ = interval(1);

// Mientras tenemos pulsado el raton
mousedown$.pipe(mergeMap(() => interval$.pipe(takeUntil(mouseup$)))).subscribe(console.log);
