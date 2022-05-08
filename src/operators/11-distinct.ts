import { distinct, from, of } from "rxjs";

const numbers$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 4, 1);

numbers$.pipe(distinct()).subscribe(console.log);

interface Character {
  name: string;
}

const Characters: Character[] = [
  { name: "Dani" },
  { name: "Dani" },
  { name: "Miki" },
  { name: "Miki" },
  { name: "Dani" },
  { name: "Armando" },
  { name: "Luni" },
];

from(Characters)
  .pipe(distinct((p) => p.name))
  .subscribe(console.log);
