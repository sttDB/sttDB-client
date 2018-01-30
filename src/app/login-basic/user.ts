export class User {
  username = '';
  authorities: string[] = [];
  authorization: any;
  password = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
