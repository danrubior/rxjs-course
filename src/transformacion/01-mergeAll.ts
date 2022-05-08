import { debounceTime, fromEvent, map, mergeAll, Observable, pluck } from 'rxjs';
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

input$
  .pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(event => event.target['value']),
    map<string, Observable<GithubUsers>>(text =>
      ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
    ),
    mergeAll<Observable<GithubUsers>>(), // Retorna el valor de el OBSERVABLE interno
    pluck('items') // Si la propiedad coincide hace el tipado
  )
  .subscribe(users => {
    if (users) console.log(users[0]);
    showUsers(users);
    // respObs$.pipe().subscribe(console.log);
  });
