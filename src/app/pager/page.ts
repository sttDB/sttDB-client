export class Page {
  listOfElements: any = [];
  totalElements: number;
  totalPages: number;
  pageIndex: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
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
}
