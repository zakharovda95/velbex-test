import { defineStore } from 'pinia';

import { getData } from '@/helpers/requesters/requests/workout.requests';

import {
  filterSchema,
  sortSchema,
  optionsSchema,
  paginationSchema,
} from '@/helpers/schemas/table.shemas';
import { conditionOptions } from '@/helpers/data/options.data';

import { Sort } from '@/helpers/classes/sort.class';
import { Filter } from '@/helpers/classes/filter.class';
import { Pagination } from '@/helpers/classes/pagination.class';
import { InterpretationService } from '@/services/interpretation.service';

import { TableDataType, TablePageStoreType } from '@/helpers/types/table-page-store.type';
import { TableColumnTitlesEnum } from '@/helpers/enums/table-column-titles.enum';

import { cloneDeep } from 'lodash';
import moment from 'moment';

export const useTablePageStore = defineStore('tablePageStore', {
  state: () =>
    ({
      isLoading: true,
      data: [],
      proxyData: [],
      filterData: [],
      options: cloneDeep(optionsSchema),
      sort: cloneDeep(sortSchema),
      filter: cloneDeep(filterSchema),
      pagination: cloneDeep(paginationSchema),
    } as TablePageStoreType),

  actions: {
    async init() {
      try {
        this.data = await getData();
        this.proxyData = this.data;
        this.filterData = this.data;

        this.getOptions();
        this.sortTable();
        this.paginate(this.proxyData);
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

      this.options.conditions = conditionOptions;
    },

    async filterTable() {
      this.pagination.page = 1;
      const inst = new Filter(this.proxyData, this.filter);
      this.data = inst.filterTable();
      this.filterData = this.data;
      this.paginate(this.filterData);
    },

    sortTable() {
      const inst = new Sort(this.proxyData, this.sort.column, this.sort.param);
      this.data = inst.sort();
      this.paginate(this.data);
    },

    paginate(array: TableDataType[]) {
      this.pagination.pages = Math.ceil(array.length / this.pagination.limit);

      const inst = new Pagination(array, this.pagination.limit, this.pagination.page);
      this.data = inst.paginate();
    },

    random() {
      this.data = this.proxyData.sort(() => Math.random() - 0.5);
      this.paginate(this.proxyData);
    },

    async reset() {
      this.options = cloneDeep(optionsSchema);
      this.filter = cloneDeep(filterSchema);
      this.sort = cloneDeep(sortSchema);
      this.pagination = cloneDeep(paginationSchema);

      await this.init();
    },
  },
});
