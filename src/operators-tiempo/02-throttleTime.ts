import {
  asyncScheduler,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  pluck,
  throttleTime
} from 'rxjs';

// ThrottleTime emite el valor y espera
const click$ = fromEvent(document, 'click');

click$.pipe(throttleTime(3000)); //.subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');
input$
  .pipe(
    throttleTime(1500, asyncScheduler, {
      leading: true,
      trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
  )
  .subscribe(console.log);
