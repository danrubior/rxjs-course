import { interval, reduce, take, tap } from "rxjs";

const number = [1, 2, 3, 4, 5];

const totalReducer = (acumulator: number, actualValue: number) => {
  console.log(`${acumulator} + ${actualValue} = ${acumulator + actualValue}`);

  return acumulator + actualValue;
};

// const total = number.reduce(totalReducer, 0);
// console.log("total arr", total);

interval(500)
  .pipe(take(6), tap(console.log), reduce(totalReducer))
  .subscribe({
    next: (val) => console.log("next:", val),
    complete: () => console.log("Complete"),
  });
