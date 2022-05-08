import { of, take, tap } from "rxjs";

const numbers$ = of(1, 2, 3, 4, 5);

// Take limita el numbero de emisiones del observable
numbers$.pipe(take(3)).subscribe({
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
});
