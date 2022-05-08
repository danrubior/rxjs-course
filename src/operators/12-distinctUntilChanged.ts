import { distinctUntilChanged, distinctUntilKeyChanged, from, of } from "rxjs";

const numbers$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 4, 1);

numbers$.pipe(distinctUntilChanged()).subscribe(console.log);

interface Character {
  name: string;
}

const characters: Character[] = [
  { name: "Dani" },
  { name: "Dani" },
  { name: "Miki" },
  { name: "Miki" },
  { name: "Dani" },
  { name: "Armando" },
  { name: "Luni" },
];

from(characters)
  .pipe(
    // distinctUntilChanged((prev, act) => prev.name === act.name)
    distinctUntilKeyChanged("name")
  )
  .subscribe(console.log);
