export class User {
  username = '';
  authorities: string[] = [];
  authorization = '';
  password = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
