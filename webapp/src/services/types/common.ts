import { AnyAction } from '@reduxjs/toolkit';
import { CallEffect, PutEffect } from 'redux-saga/effects';

export type CommonGenerator<I, R = any> = Generator<CallEffect<I> | PutEffect<AnyAction>, R, I>;

export interface PaginationEdge<Item = any> {
  cursor: string;
  item: Item;
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string | null;
  endCursor: string | null;
}

export interface PaginationConnection<Item = any> {
  totalCount: number;
  list: PaginationEdge<Item>[];
  pageInfo: PageInfo;
}

export interface Pagination<Schema> {
  totalCount: number;
  list: Schema;
  pageInfo: PageInfo;
}
