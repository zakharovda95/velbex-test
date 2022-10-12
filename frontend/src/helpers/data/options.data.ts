import { LimitOptionType, OptionType } from '@/helpers/types/table-page-store.type';
import {
  FiltrationConditionNamesEnum,
  FiltrationConditionTitlesEnum,
} from '@/helpers/enums/filtration-conditions.enum';

export const limitOptions: LimitOptionType[] = [
  {
    name: '5',
    value: 5,
  },
  {
    name: '10',
    value: 10,
  },
  {
    name: '15',
    value: 15,
  },
  {
    name: '20',
    value: 20,
  },
];

export const conditionOptions: OptionType[] = [
  {
    name: FiltrationConditionNamesEnum.equal,
    value: FiltrationConditionTitlesEnum.equal,
  },
  {
    name: FiltrationConditionNamesEnum.includes,
    value: FiltrationConditionTitlesEnum.includes,
  },
  {
    name: FiltrationConditionNamesEnum.more,
    value: FiltrationConditionTitlesEnum.more,
  },
  {
    name: FiltrationConditionNamesEnum.less,
    value: FiltrationConditionTitlesEnum.less,
  },
];
