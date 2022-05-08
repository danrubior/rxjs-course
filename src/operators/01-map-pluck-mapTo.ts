import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

// range(1, 5).subscribe(val => console.log(val * 10));
// range(1, 5)
//   .pipe(map<number, string>((val) => (val * 10).toString()))
//   .subscribe(console.log);

// let array = [1, 2, 3, 4, 5];
// array = array.map((val) => val * 10);
// console.log(array);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
const keyupCode$ = keyup$.pipe(map((event) => event.code));

//pluck devuelve solo las propiedades que indicamos
// const keyupPluck$ = keyup$.pipe(pluck("key"));
const keyupPluck$ = keyup$.pipe(pluck("target", "baseURI"));

const keyupMapTo$ = keyup$.pipe(mapTo("Tecla presionada"));

keyupCode$.subscribe((code) => console.log("map", code));
keyupPluck$.subscribe((code) => console.log("pluck", code));
keyupMapTo$.subscribe((code) => console.log("mapTo", code));
