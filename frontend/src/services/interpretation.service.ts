import {
  TableColumnNamesEnum,
  TableColumnTitlesEnum,
} from '@/helpers/enums/table-column-titles.enum';

export class InterpretationService {
  public static getTableColumnTitlesInterpretation(tableTitle: TableColumnTitlesEnum) {
    return TableColumnNamesEnum[tableTitle];
  }
}
