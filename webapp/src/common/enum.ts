import { Dictionary, EntityId } from '@reduxjs/toolkit';
import { PageInfo } from '../services/types/common';

export interface BaseState<S = any> {
  list: {
    ids: EntityId[];
    entities: Dictionary<S>;
    totalCount: number;
    pageInfo: PageInfo;
  };
}
