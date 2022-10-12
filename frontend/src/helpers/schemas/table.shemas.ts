import {
  FilterType,
  OptionsType,
  PaginationType,
  SortType,
} from '@/helpers/types/table-page-store.type';
import { TableColumnTitlesEnum } from '@/helpers/enums/table-column-titles.enum';
import { SortConditionsEnum } from '@/helpers/enums/sort-conditions.enum';
import { limitOptions } from '@/helpers/data/options.data';

export const sortSchema: SortType = {
  column: TableColumnTitlesEnum.name,
  param: SortConditionsEnum.asc,
};

export const paginationSchema: PaginationType = {
  page: 1,
  pages: 1,
  limit: limitOptions[0].value,
  limitOptions: limitOptions,
};

export const optionsSchema: OptionsType = {
  columns: [],
  conditions: [],
};

export const filterSchema: FilterType = {
  column: '',
  condition: '',
  value: '',
};
