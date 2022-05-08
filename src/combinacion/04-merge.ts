import { fromEvent, merge, pluck } from 'rxjs';

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const click$ = fromEvent<MouseEvent>(document, 'click');

//Nos suscribimos a dos observable a la vez
merge(
  keyup$.pipe(pluck('type')),
  click$.pipe(pluck('type'))
).subscribe(console.log);
