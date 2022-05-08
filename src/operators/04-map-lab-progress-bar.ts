import { fromEvent, map, tap } from "rxjs";

const text = document.createElement("div");
text.innerHTML = `
  Eu mollit eiusmod tempor adipisicing incididunt qui quis aliquip pariatur sit nulla exercitation voluptate. Mollit cillum sunt fugiat non incididunt culpa ut qui sunt sit irure aliquip quis ea. Ullamco ullamco nulla labore non commodo duis fugiat id. Adipisicing do consectetur eiusmod enim. Qui amet pariatur nisi fugiat. Aute fugiat minim elit sint ad sint ea duis.
<br/><br/>
Ex ex nulla exercitation anim. Quis eu elit elit ex exercitation ad aliquip nulla. Sit sint laboris quis incididunt exercitation do nisi excepteur cupidatat.
<br/><br/>
Magna quis nulla reprehenderit id nulla amet veniam commodo veniam ex laboris velit. Nostrud qui tempor ut veniam elit quis non nulla cillum velit. Consequat enim officia cillum sunt veniam tempor consectetur duis labore irure. Nulla cupidatat in anim duis tempor fugiat eiusmod reprehenderit do laboris aliqua laborum culpa.
<br/><br/>
Reprehenderit quis est ullamco qui fugiat aliquip. Reprehenderit qui duis eiusmod labore consequat consequat ea aute ad. Sit consectetur voluptate qui sint ullamco incididunt eiusmod aliqua deserunt. Amet voluptate in incididunt pariatur laboris eiusmod nisi dolor anim consectetur dolore fugiat officia eiusmod. Laboris dolore enim Lorem deserunt duis aliqua pariatur nulla quis voluptate incididunt minim sint. Aliquip ad duis sunt eiusmod laboris nulla.
<br/><br/>
Ea reprehenderit aliquip labore minim laboris laboris ea dolor nisi qui adipisicing esse nisi. Aliquip deserunt proident esse minim id tempor fugiat culpa minim dolor Lorem pariatur pariatur nulla. Proident consectetur esse eu dolore ullamco ipsum occaecat veniam qui reprehenderit. Aute non do aliquip ipsum. Lorem in est culpa eu. Voluptate mollit pariatur eiusmod enim. Dolor incididunt aute anim nisi incididunt.
<br/><br/>
Eu mollit eiusmod tempor adipisicing incididunt qui quis aliquip pariatur sit nulla exercitation voluptate. Mollit cillum sunt fugiat non incididunt culpa ut qui sunt sit irure aliquip quis ea. Ullamco ullamco nulla labore non commodo duis fugiat id. Adipisicing do consectetur eiusmod enim. Qui amet pariatur nisi fugiat. Aute fugiat minim elit sint ad sint ea duis.
<br/><br/>
Ex ex nulla exercitation anim. Quis eu elit elit ex exercitation ad aliquip nulla. Sit sint laboris quis incididunt exercitation do nisi excepteur cupidatat.
<br/><br/>
Magna quis nulla reprehenderit id nulla amet veniam commodo veniam ex laboris velit. Nostrud qui tempor ut veniam elit quis non nulla cillum velit. Consequat enim officia cillum sunt veniam tempor consectetur duis labore irure. Nulla cupidatat in anim duis tempor fugiat eiusmod reprehenderit do laboris aliqua laborum culpa.
<br/><br/>
Reprehenderit quis est ullamco qui fugiat aliquip. Reprehenderit qui duis eiusmod labore consequat consequat ea aute ad. Sit consectetur voluptate qui sint ullamco incididunt eiusmod aliqua deserunt. Amet voluptate in incididunt pariatur laboris eiusmod nisi dolor anim consectetur dolore fugiat officia eiusmod. Laboris dolore enim Lorem deserunt duis aliqua pariatur nulla quis voluptate incididunt minim sint. Aliquip ad duis sunt eiusmod laboris nulla.
<br/><br/>
Ea reprehenderit aliquip labore minim laboris laboris ea dolor nisi qui adipisicing esse nisi. Aliquip deserunt proident esse minim id tempor fugiat culpa minim dolor Lorem pariatur pariatur nulla. Proident consectetur esse eu dolore ullamco ipsum occaecat veniam qui reprehenderit. Aute non do aliquip ipsum. Lorem in est culpa eu. Voluptate mollit pariatur eiusmod enim. Dolor incididunt aute anim nisi incididunt.
<br/><br/>
Eu mollit eiusmod tempor adipisicing incididunt qui quis aliquip pariatur sit nulla exercitation voluptate. Mollit cillum sunt fugiat non incididunt culpa ut qui sunt sit irure aliquip quis ea. Ullamco ullamco nulla labore non commodo duis fugiat id. Adipisicing do consectetur eiusmod enim. Qui amet pariatur nisi fugiat. Aute fugiat minim elit sint ad sint ea duis.
<br/><br/>
Ex ex nulla exercitation anim. Quis eu elit elit ex exercitation ad aliquip nulla. Sit sint laboris quis incididunt exercitation do nisi excepteur cupidatat.
<br/><br/>
Magna quis nulla reprehenderit id nulla amet veniam commodo veniam ex laboris velit. Nostrud qui tempor ut veniam elit quis non nulla cillum velit. Consequat enim officia cillum sunt veniam tempor consectetur duis labore irure. Nulla cupidatat in anim duis tempor fugiat eiusmod reprehenderit do laboris aliqua laborum culpa.
<br/><br/>
Reprehenderit quis est ullamco qui fugiat aliquip. Reprehenderit qui duis eiusmod labore consequat consequat ea aute ad. Sit consectetur voluptate qui sint ullamco incididunt eiusmod aliqua deserunt. Amet voluptate in incididunt pariatur laboris eiusmod nisi dolor anim consectetur dolore fugiat officia eiusmod. Laboris dolore enim Lorem deserunt duis aliqua pariatur nulla quis voluptate incididunt minim sint. Aliquip ad duis sunt eiusmod laboris nulla.
<br/><br/>
Ea reprehenderit aliquip labore minim laboris laboris ea dolor nisi qui adipisicing esse nisi. Aliquip deserunt proident esse minim id tempor fugiat culpa minim dolor Lorem pariatur pariatur nulla. Proident consectetur esse eu dolore ullamco ipsum occaecat veniam qui reprehenderit. Aute non do aliquip ipsum. Lorem in est culpa eu. Voluptate mollit pariatur eiusmod enim. Dolor incididunt aute anim nisi incididunt.
<br/><br/>
Eu mollit eiusmod tempor adipisicing incididunt qui quis aliquip pariatur sit nulla exercitation voluptate. Mollit cillum sunt fugiat non incididunt culpa ut qui sunt sit irure aliquip quis ea. Ullamco ullamco nulla labore non commodo duis fugiat id. Adipisicing do consectetur eiusmod enim. Qui amet pariatur nisi fugiat. Aute fugiat minim elit sint ad sint ea duis.
<br/><br/>
Ex ex nulla exercitation anim. Quis eu elit elit ex exercitation ad aliquip nulla. Sit sint laboris quis incididunt exercitation do nisi excepteur cupidatat.
<br/><br/>
Magna quis nulla reprehenderit id nulla amet veniam commodo veniam ex laboris velit. Nostrud qui tempor ut veniam elit quis non nulla cillum velit. Consequat enim officia cillum sunt veniam tempor consectetur duis labore irure. Nulla cupidatat in anim duis tempor fugiat eiusmod reprehenderit do laboris aliqua laborum culpa.
<br/><br/>
Reprehenderit quis est ullamco qui fugiat aliquip. Reprehenderit qui duis eiusmod labore consequat consequat ea aute ad. Sit consectetur voluptate qui sint ullamco incididunt eiusmod aliqua deserunt. Amet voluptate in incididunt pariatur laboris eiusmod nisi dolor anim consectetur dolore fugiat officia eiusmod. Laboris dolore enim Lorem deserunt duis aliqua pariatur nulla quis voluptate incididunt minim sint. Aliquip ad duis sunt eiusmod laboris nulla.
<br/><br/>
Ea reprehenderit aliquip labore minim laboris laboris ea dolor nisi qui adipisicing esse nisi. Aliquip deserunt proident esse minim id tempor fugiat culpa minim dolor Lorem pariatur pariatur nulla. Proident consectetur esse eu dolore ullamco ipsum occaecat veniam qui reprehenderit. Aute non do aliquip ipsum. Lorem in est culpa eu. Voluptate mollit pariatur eiusmod enim. Dolor incididunt aute anim nisi incididunt.

`;

const body = document.querySelector("body");
body.append(text);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

//funcion que haga el calculo
const calculatePercentScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams

const scroll$ = fromEvent(document, "scroll");

scroll$
  .pipe(
    map((event) => calculatePercentScroll(event)),
    tap((value) => console.log("Percent => ", value))
  )
  .subscribe((percent) => {
    progressBar.style.width = `${percent}%`;
  });
