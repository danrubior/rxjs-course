import { Observable, Observer } from "rxjs";


const observer: Observer<any> = {
  next: value => console.log("next: ", value),
  error: error => console.warn("error: ", error),
  complete: () => console.info("completado: [obs]")
}

//Observable que emite un numero cada intervalo de tiempo
const intervalo$ = new Observable<number>(subs => {
  // Crear un contador: 1,2,3,4,5 .....
  let count = 0;

  const interval = setInterval(() => {
    count++;
    subs.next(count);
    console.log(count);
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("Intervalo destruido");
  }
})

//Nos suscribimos al observable
const subs1 = intervalo$.subscribe();
const subs2 = intervalo$.subscribe();
const subs3 = intervalo$.subscribe();

setTimeout(() => {
  subs1.unsubscribe();
  subs2.unsubscribe();
  subs3.unsubscribe();

  console.log("Timeout completado!")
}, 3000);
