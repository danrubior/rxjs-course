import { Observable } from 'rxjs'; 

//Emite valores y se muestran en la suscripcion
const obs$ = new Observable<string>(subs => {
  subs.next("Hola");
  subs.next("Mundo");
  subs.next("Hola");
  subs.next("Mundo");

  subs.complete();

  subs.next("Hola");
  subs.next("Mundo");
});

// obs$.subscribe(res => { 
//   console.log(res);
// })

obs$.subscribe(console.log)


