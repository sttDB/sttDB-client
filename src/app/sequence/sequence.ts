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

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
