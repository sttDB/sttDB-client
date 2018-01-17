import {Family} from "../family/family";

export class Sequence {
  uri: string;
  id: number;
  trinityId: string;
  sequence: string;
  specie: string;
  transcript: string;
  families: string[];
  experiment: string;
  length: number;
  _links: any = {};

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
