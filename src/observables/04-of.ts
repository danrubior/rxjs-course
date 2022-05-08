import { Observer, of } from "rxjs"

// const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of(...[1, 2, 3, 4, 5, 6], 2, 3, 4, 5);
// const obs$ = of([1, 2], {a: 1, b:2}, function(){}, true, Promise.resolve(true));

const observer: Observer<any> = {
  next: next => console.log("next", next),
  error: () => null, 
  complete:() => console.log("Observable completado")
};

console.log("Inicio del Obs$");


obs$.subscribe(observer);


console.log("Fin del Obs$");
