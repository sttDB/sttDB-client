import {Family} from '../family/family';
import {Experiment} from '../experiment/experiment';

export class Sequence {
  uri: string;
  id: number;
  trinityId: string;
  sequence: string;
  specie: string;
  transcript: string;
  domainInfo = {};
  extraInfo = {};
  experiment: string;
  length: number;
  _links: any = {};
  _embedded: any = {};

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
