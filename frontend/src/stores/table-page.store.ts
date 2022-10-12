import { defineStore } from 'pinia';

import { getData } from '@/helpers/requesters/requests/workout.requests';

import { filterSchema } from '@/helpers/schemas/filter.schema';
import { optionsSchema } from '@/helpers/schemas/options.schema';
import { sortSchema } from '@/helpers/schemas/sort.shema';

import { Filter } from '@/helpers/classes/filter.class';
import { InterpretationService } from '@/services/interpretation.service';

import { TablePageStoreType } from '@/helpers/types/stores/table-page-store.type';
import { TableColumnTitlesEnum } from '@/helpers/enums/table-column-titles.enum';
import {
  FiltrationConditionNamesEnum,
  FiltrationConditionTitlesEnum,
} from '@/helpers/enums/filtration-conditions.enum';

import { cloneDeep, sortBy } from 'lodash';
import { SortConditionsEnum } from '@/helpers/enums/sort-conditions.enum';

export const useTablePageStore = defineStore('tablePageStore', {
  state: () =>
    ({
      isLoading: false,
      data: [],
      options: cloneDeep(optionsSchema),
      sort: cloneDeep(sortSchema),
      filter: cloneDeep(filterSchema),
    } as TablePageStoreType),

  actions: {
    async getData() {
      this.isLoading = true;
      try {
        this.data = await getData();
        this.sortTable();
      } catch (err) {
        console.log(err);
      } finally {
        this.isLoading = false;
      }
    },

    getOptions() {
      const columns = Object.keys(this.data[0]) as TableColumnTitlesEnum[];

      this.options.columns = columns.map(column => {
        return {
          name: InterpretationService.getTableColumnTitlesInterpretation(column),
          value: TableColumnTitlesEnum[column],
        };
      });

      this.options.conditions = [
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
    },

    async filterTable() {
      await this.getData();

      if (this.data) {
        const filter = new Filter(this.data, this.filter);

        this.data = filter.filterTable();
      }
    },

    sortTable() {
      if (this.sort.column !== TableColumnTitlesEnum.name) {
        if (this.sort.param === SortConditionsEnum.desc) {
          this.data = sortBy(this.data, [
            obj => {
              const elem: { [key: string]: any } = obj;
              return elem[this.sort.column];
            },
          ]);
        } else {
          this.data = sortBy(this.data, [
            obj => {
              const elem: { [key: string]: any } = obj;
              return -elem[this.sort.column];
            },
          ]);
        }
      } else {
        const param = (a: any, b: any) => a.name.localeCompare(b.name);

        if (this.sort.param === SortConditionsEnum.desc) {
          this.data = this.data.sort(param);
        } else {
          this.data = this.data.sort(param).reverse();
        }
      }
    },

    random() {
      if (this.data) {
        this.data = this.data.sort(() => Math.random() - 0.5);
      }
    },

    async reset() {
      this.options = cloneDeep(optionsSchema);
      this.filter = cloneDeep(filterSchema);
      this.sort = cloneDeep(sortSchema);

      await this.getData();
      await this.getOptions();
    },
  },
});
