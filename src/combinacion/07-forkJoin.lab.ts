import { catchError, forkJoin, map, of, pluck, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'danrubior';

forkJoin({
  user: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
  repos: ajax
    .getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`)
    .pipe
    // map((repos: any) => {
    //   console.log(repos, typeof repos);
    //   // repos.map(repo => repo['name']);
    //   return repos;
    // })
    (),
  gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`)
})
  .pipe(catchError(err => of(err.message)))
  .subscribe(console.log);
