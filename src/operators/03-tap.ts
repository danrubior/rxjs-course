import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const numbers = range(1, 5);

numbers
  .pipe(
    tap((val) => console.log("antes   =>", val)),
    map((val) => val * 10),
    tap({
      next: (val) => console.log("despues =>", val),
      complete: () => console.log("se termino todo"),
    })
  )
  .subscribe((val) => console.log("subs    =>", val));
