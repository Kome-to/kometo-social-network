import { normalize, schema } from 'normalizr';
import { Pagination, PaginationConnection } from '../../services/types/common';

export const normalized = <Schema>(data: any, schema: schema.Entity) => normalize<any, Schema>(data, schema).entities;

export const normalizedPagination = <Schema>(response: PaginationConnection, schema: schema.Entity[]): Pagination<Schema> => ({
  list: normalize<any, Schema>(
    response.list.map((edge) => edge.item),
    schema,
  ).entities,
  pageInfo: response.pageInfo,
  totalCount: response.totalCount,
});
