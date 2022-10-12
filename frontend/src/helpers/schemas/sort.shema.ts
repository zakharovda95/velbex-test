import { SortType } from '@/helpers/types/stores/table-page-store.type';
import { SortConditionsEnum } from '@/helpers/enums/sort-conditions.enum';
import { TableColumnTitlesEnum } from '@/helpers/enums/table-column-titles.enum';

export const sortSchema: SortType = {
  column: TableColumnTitlesEnum.name,
  param: SortConditionsEnum.asc,
};
