export class Sequence {
  id: number;
  trinityId: string;
  sequence: string;
  specie: string;
  transcript: string;
  familyId: string;
  experiment: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
