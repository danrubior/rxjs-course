import {
  debounceTime,
  fromEvent,
  map,
  mergeAll,
  mergeMap,
  Observable,
  pluck,
  switchMap
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { GithubUser, GithubUsers } from '../interfaces/github-users.interfaces';

// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const showUsers = (users: GithubUser[]) => {
  orderList.innerHTML = '';
  for (const user of users) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = user.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = user.html_url;
    anchor.text = 'Ver página';
    anchor.target = '_blank';

    li.append(img);
    li.append(user.login);
    li.append(anchor);

    orderList.append(li);
  }
};

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
  debounceTime<KeyboardEvent>(500),
  map<KeyboardEvent, string>(event => event.target['value']),
  mergeMap<string, Observable<GithubUsers>>(text =>
    ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
  ),
  pluck('items') // Si la propiedad coincide hace el tipado
);
// .subscribe(users => {
//   if (users) console.log(users[0]);
//   showUsers(users);
//   // respObs$.pipe().subscribe(console.log);
// });

const url = 'https://httpbin.org/delay/1?arg='; // + dani

//SwitchMap cancela todos los observables menos el ultimo
input$
  .pipe(
    pluck('target', 'value'),
    switchMap(text => ajax.getJSON(url + text))
  )
  .subscribe(console.log);
