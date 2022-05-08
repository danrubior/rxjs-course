import { interval, timer } from "rxjs";

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const hoyEn5 = new Date(); //Ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5); //5 segundos después

// const interval$ = interval(1000);
/**
 * Interval que inicia en 2 segundo
 */
// const timer$ = timer(2000, 1000);
const timer$ = timer(hoyEn5);

console.log("inicio");
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("fin");
