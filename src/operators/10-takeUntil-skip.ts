import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const button = document.createElement("button");
button.innerHTML = "Detener timer";

document.querySelector("body").append(button);

const counter$ = interval(1000);
// const clickButton$ = fromEvent(button, "click");
const clickButton$ = fromEvent(button, "click").pipe(
  tap(() => console.log("tap antes de skip")),
  skip(1),
  tap(() => console.log("tap despues de skip"))
);

// takeUntil = la subscripcion se ejecuta hasta que el observable que le indiquemos emita su primer valor
counter$.pipe(takeUntil(clickButton$)).subscribe({
  next: (val) => console.log("next:", val),
  complete: () => console.log("complete"),
});
