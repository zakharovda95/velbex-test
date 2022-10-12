import { provider } from '@/helpers/requesters/axios.requester';

import { TableDataType } from '@/helpers/types/requests/table-data.type';

export async function getData(): Promise<TableDataType[]> {
  const res = await provider.axios.get('api/table_data');
  return res.data;
}
