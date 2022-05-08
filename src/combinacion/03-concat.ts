import { concat, interval, of, take } from 'rxjs';

const interval$ = interval(1000);

//Concatena observables
concat(
  interval$.pipe(take(3)),
  interval$.pipe(take(2)),
  of(1)
).subscribe(console.log);
