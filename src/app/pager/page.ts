export class Page {
  listOfElements: any = [];
  numberOfElements: number;
  numberOfPages: number;
  pageIndex: number;

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}
