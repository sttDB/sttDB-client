export class Sequence {
  uri: string;
  id: number;
  trinityId: string;
  sequence: string;
  specie: string;
  transcript: string;
  familyId: string;
  experiment: string;
  length: number;
  _links: any = {};

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
