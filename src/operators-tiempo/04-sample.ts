import { fromEvent, interval, map, sample, sampleTime } from 'rxjs';

const interval$ = interval(500);
const click$ = fromEvent<MouseEvent>(document, 'click');

// Muestra la ultima emision cuando se hace click
interval$.pipe(sample(click$)).subscribe(console.log);
