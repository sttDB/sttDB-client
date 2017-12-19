export class Family{
  id: number;
  interproId: string;
  description: string;
  experiment: string;
  uri: string;
  _links: any = {};

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
