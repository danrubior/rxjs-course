import { fromEvent, map, takeWhile } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => ({ x, y })),
    takeWhile(({ y }) => y <= 300, true)
    //El ultimo argumento indica si incluye el valor que rompe la emision
  )
  .subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("complete, (y <= 300)"),
  });
