import { provider } from '@/helpers/requesters/axios.requester';

import { TableDataType } from '@/helpers/types/table-page-store.type';

export async function getData(): Promise<TableDataType[]> {
  const res = await provider.axios.get('api/table_data');
  return res.data;
}
