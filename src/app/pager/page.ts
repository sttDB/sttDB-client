export class Page {
  listOfElements: any = [];
  totalElements: number;
  totalPages: number;
  pageIndex: number;

  constructor(values: Object = {}) {
    values['listOfElements'] = values['content'];
    Object.assign(this, values);
    this.pageIndex = this['number'];
  }

  getPaginating(pageIndex: number): number[] {
    return pageIndex - 5 < 1 ?  this.createArrayIndex(1) : this.createArrayIndex(pageIndex - 5);
  }

  createArrayIndex(firstNumber: number): number[] {
    let pageIndexes = [];
    for(let i = firstNumber; i<firstNumber+9 && i<this.totalPages+1; i++){
      pageIndexes.push(i);
    }
    return pageIndexes;
  }

  append(page: Page) {

  }
}
