import { concatMap, exhaustMap, fromEvent, interval, take } from 'rxjs';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

// ExahustMap: Si hay una suscripcion activa ignora las siguientes
click$.pipe(exhaustMap(() => interval$)).subscribe(console.log);
