import {
  TableColumnNamesEnum,
  TableColumnTitlesEnum,
} from '@/helpers/enums/table-column-titles.enum';
import {
  FiltrationConditionNamesEnum,
  FiltrationConditionTitlesEnum,
} from '@/helpers/enums/filtration-conditions.enum';
import { SortConditionsEnum } from '@/helpers/enums/sort-conditions.enum';

export interface TablePageStoreType {
  isLoading: boolean;
  options: OptionsType;
  data: TableDataType[];
  proxyData: TableDataType[];
  filterData: TableDataType[];
  sort: SortType;
  filter: FilterType;
  pagination: PaginationType;
}

export interface TableDataType {
  date: number | string;
  name: string;
  amount: number;
  distance: number;
}

export interface OptionsType {
  columns: OptionType[];
  conditions: OptionType[];
}

export interface OptionType {
  name: FiltrationConditionNamesEnum | TableColumnNamesEnum | string;
  value: FiltrationConditionTitlesEnum | TableColumnTitlesEnum | number;
}

export interface LimitOptionType {
  name: string;
  value: number;
}

export interface FilterType {
  column: TableColumnTitlesEnum | string;
  condition: FiltrationConditionTitlesEnum | string;
  value: string;
}

export interface SortType {
  column: TableColumnTitlesEnum;
  param: SortConditionsEnum;
}

export interface PaginationType {
  page: number;
  pages: number;
  limit: number;
  limitOptions: OptionType[];
}
