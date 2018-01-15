export class Page {
  listOfElements: any = [];
  numberOfElements: number;
  numberOfPages: number;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
