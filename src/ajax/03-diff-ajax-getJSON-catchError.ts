import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://httX pbin.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';

const errorCatcher = (resp: AjaxError) => {
  console.warn('error: ', resp.message);
  return of({
    of: false,
    usuarios: []
  });
};

const obs$ = ajax.getJSON(url); //.pipe(catchError(errorCatcher));
const obs2$ = ajax(url).pipe(catchError(errorCatcher));

obs$.subscribe({
  next: data => console.log('getJSON: ', data),
  error: err => console.warn('error en subs: ', err),
  complete: () => console.log('complete')
});

// obs2$.subscribe(data => console.log('ajax: ', data));
