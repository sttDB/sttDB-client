export class Experiment {
  name: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
