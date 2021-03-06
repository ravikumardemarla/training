// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  API_URL: 'http://localhost:4200/assets/user-info.json',
  STUDENT_INFO: 'http://localhost:4200/assets/data.json',
  JSON_SERVER: 'http://jsonplaceholder.typicode.com/posts',
  TODO_URL: 'http://localhost:4200/assets/todos.json',
  FR_URL: 'http://localhost:3000',
  FR_USER_REG: 'http://localhost:7010',
  REMOTE_REG: 'http://198.168.2.252:7010'
};
