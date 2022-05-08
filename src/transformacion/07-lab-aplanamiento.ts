import { catchError, exhaustMap, fromEvent, map, mergeMap, of, pluck, switchMap, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// Helper
const loginHttpRequest = userPass =>
  ajax.post(`https://reqres.in/api/login?delay=1`, userPass).pipe(
    pluck('response', 'token'),
    catchError(err => of('Token no válido'))
  );

// Creando el formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configs
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

// Añadimos el form
form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

// Streams
const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
  tap(ev => ev.preventDefault()),
  map(ev => ({ email: ev.target[0].value, password: ev.target[1].value })),
  // mergeMap(loginHttpRequest), // Hace todas las subs
  // switchMap(loginHttpRequest), // Hace la ultima subs
  exhaustMap(loginHttpRequest) // Ignora todas las subs menos la activa
);
submitForm$.subscribe(token => {
  console.log(token);
});
