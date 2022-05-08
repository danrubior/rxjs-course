import { from, map, reduce } from "rxjs";
import { scan } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];

const totalAcumulator = (acc, curr) => acc + curr;

// Reduce (Emite el valor acumulado al completar)
from(numbers).pipe(reduce(totalAcumulator, 0)).subscribe(console.log);

// Scan (Emite por cada iteracion)
from(numbers).pipe(scan(totalAcumulator, 0)).subscribe(console.log);

// Redux
interface User {
  id?: string;
  auth?: boolean;
  token?: string;
  age?: number;
}

const user: User[] = [
  { id: "dan", auth: false, token: null },
  { id: "dan", auth: true, token: "ABC" },
  { id: "dan", auth: true, token: "ABC123" },
];

const state$ = from(user).pipe(
  scan<User, User>(
    (acc: User, curr: User) => {
      return { ...acc, ...curr };
    },
    { age: 33 }
  )
);

const id$ = state$.pipe(map((state) => state));

id$.subscribe(console.log);
