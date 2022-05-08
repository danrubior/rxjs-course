import { Observable, Observer, Subject } from "rxjs";


const observer: Observer<any> = {
  next: value => console.log("next: ", value),
  error: error => console.warn("error: ", error),
  complete: () => console.info("completado")
};

const interval$ = new Observable<number>(subs => {

  const intervalID = setInterval(
    () => subs.next(Math.random()), 1000
  );

  return () => {
    clearInterval( intervalID );
    console.log("clearInterval()");
  };
});

/**
 * 1- Casteo múltiple (Las suscripciones estaran sujetas a este subject, se comparte la misma informacion
 * 2- También es un observer
 * 3- Next, error y complete
 */

const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);

//Nos suscribimos al SUBJECT
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 3500);