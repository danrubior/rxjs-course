import { catchError, map, of, pluck } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://api.github.com/users?per_page=5';

const fetchPromise = fetch(url);

// fetchPromise
//   .then(resp => resp.json())
//   .then(data => console.log('data: ', data))
//   .catch(err => console.warn('error al obtener los usuarios', err));

// fetchPromise
//   .then(errorsCatcher)
//   .then(resp => resp.json())
//   .then(data => console.log('data: ', data))
//   .catch(err => console.warn('error al obtener los usuarios', err));

const errorsCatcher = (err: AjaxError) => {
  console.warn('error en: ', err.message);
  return of([]);
};

ajax(url)
  .pipe(pluck('response'), catchError(errorsCatcher))
  .subscribe(users => console.log('usuarios: ', users));
