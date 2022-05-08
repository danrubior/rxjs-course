import { Observable, Observer } from "rxjs";


const observer: Observer<any> = {
  next: value => console.log("next: ", value),
  error: error => console.warn("error: ", error),
  complete: () => console.info("completado")
};

//Observable que emite un numero cada intervalo de tiempo
const intervalo$ = new Observable<number>(subs => {
  // Crear un contador: 1,2,3,4,5 .....
  let count = 0;

  const interval = setInterval(() => {
    count++;
    subs.next(count);
    // console.log(count);
  }, 1000);

  setTimeout(() => {
    subs.complete();
  }, 2500)

  //Cuando se completa el obserbable
  return () => {
    clearInterval(interval);
    console.log("Intervalo destruido");
  }
})

//Nos suscribimos al observable
const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

//Encadenamos las suscripciones
subs1.add(subs2);
subs1.add(subs3);


setTimeout(() => {
  subs1.unsubscribe();

  console.log("Timeout Unsubscribe completado!")
}, 6000);
