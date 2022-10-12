import { TableDataType } from '@/helpers/types/table-page-store.type';

export class Pagination {
  private array: TableDataType[];
  private readonly limit: number;
  private readonly page: number;

  constructor(array: TableDataType[], limit: number, page: number) {
    this.array = array;
    this.limit = limit;
    this.page = page;
  }

  public paginate() {
    let startIndex: number;
    let endIndex: number;

    if (this.page === 1) {
      endIndex = this.limit - 1;
      startIndex = 0;
    } else {
      endIndex = this.page * this.limit - 1;
      startIndex = endIndex - (this.limit - 1);

      if (endIndex > this.array.length - 1) {
        endIndex = this.array.length - 1;
      }
    }

    return this.array.filter((elem, index) => {
      return index >= startIndex && index <= endIndex;
    });
  }
}
