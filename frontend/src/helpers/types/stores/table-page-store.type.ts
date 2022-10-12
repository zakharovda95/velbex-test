import { TableDataType } from '@/helpers/types/requests/table-data.type';
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
  sort: SortType;
  filter: FilterType;
}

export interface OptionsType {
  columns: OptionType[];
  conditions: OptionType[];
}

export interface OptionType {
  name: FiltrationConditionNamesEnum | TableColumnNamesEnum;
  value: FiltrationConditionTitlesEnum | TableColumnTitlesEnum;
}

export interface FilterType {
  column: TableColumnTitlesEnum | string;
  condition: FiltrationConditionTitlesEnum | string;
  value: string;
}

export interface SortType {
  column: TableColumnTitlesEnum | string;
  param: SortConditionsEnum | string;
}
