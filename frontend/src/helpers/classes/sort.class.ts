import { TableDataType } from '@/helpers/types/table-page-store.type';
import { TableColumnTitlesEnum } from '@/helpers/enums/table-column-titles.enum';
import { SortConditionsEnum } from '@/helpers/enums/sort-conditions.enum';
import { sortBy } from 'lodash';

export class Sort {
  private readonly array: TableDataType[];
  private readonly field: TableColumnTitlesEnum;
  private readonly param: SortConditionsEnum;

  constructor(array: TableDataType[], field: TableColumnTitlesEnum, param: SortConditionsEnum) {
    this.array = array;
    this.field = field;
    this.param = param;
  }

  private numberSort() {
    return sortBy(this.array, [
      elem => {
        return this.param === SortConditionsEnum.desc ? elem[this.field] : -elem[this.field];
      },
    ]);
  }

  private stringSort() {
    const param = (a: any, b: any) => a.name.localeCompare(b.name);

    return this.param === SortConditionsEnum.desc
      ? this.array.sort(param)
      : this.array.sort(param).reverse();
  }

  public sort() {
    if (this.field !== TableColumnTitlesEnum.name) {
      return this.numberSort();
    } else {
      return this.stringSort();
    }
  }
}
