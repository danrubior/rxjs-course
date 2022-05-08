import { first, fromEvent, map, of, take, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

//Se emite por primera y ultima vez cuando pulsemos la coordenada Y mayor a 300
click$
  .pipe(
    tap<MouseEvent>(() => console.log("tap")),
    // map((event) => ({
    //   clientY: event.clientY,
    //   clientX: event.clientX,
    // }))
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    first((event) => event.clientY >= 300)
  )
  .subscribe({
    next: (val) => console.log("next: ", val),
    complete: () => console.log("complete"),
  });
