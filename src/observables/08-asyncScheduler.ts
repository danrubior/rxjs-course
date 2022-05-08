// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

import { async, asyncScheduler } from "rxjs";

const saludar = () => console.log("Hola mundo");
const saludar2 = ({ name, surname }) => console.log(`Hola ${name} ${surname}`);

// asyncScheduler.schedule(saludar, 2000);
// asyncScheduler.schedule(saludar2, 2000, { name: "Dani", surname: "Rubio" });

const subs = asyncScheduler.schedule(
  function (state) {
    console.log("state", state);
    this.schedule(state + 1, 1000);
  },
  2000,
  0
);

// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
