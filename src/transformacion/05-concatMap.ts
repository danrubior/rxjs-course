import { concatMap, fromEvent, interval, take } from 'rxjs';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

// ConcatMap: Añade los observables a la cola y se ejecutan secuencialmente
click$.pipe(concatMap(() => interval$)).subscribe(console.log);
