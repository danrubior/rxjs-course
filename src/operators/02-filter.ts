import { filter, from, fromEvent, map, Observer, of, pluck, range } from "rxjs";

range(1, 10).pipe(
  filter((num, index) => {
    console.log("index", index);
    return num % 2 === 1;
  })
);
//  .subscribe(console.log);

type Character = {
  type: string;
  name: string;
};

const characters: Character[] = [
  {
    type: "heroe",
    name: "Batman",
  },
  {
    type: "heroe",
    name: "Robin",
  },
  {
    type: "villano",
    name: "Joker",
  },
];

const characters$ = from(characters)
  .pipe(filter((character) => character.type === "heroe"))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((event) => event.code), //string
  filter((code) => code === "Enter")
);

keyup$.subscribe(console.log);
