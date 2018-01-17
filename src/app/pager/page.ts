export class Page {
  listOfElements: any = [];
  totalElements: number;
  totalPages: number;
  pageIndex: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
