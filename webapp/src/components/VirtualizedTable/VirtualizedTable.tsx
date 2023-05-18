import React from 'react';
import classNames from 'classnames';
import {
  AutoSizer,
  Column,
  Index,
  IndexRange,
  InfiniteLoader,
  InfiniteLoaderProps,
  SortDirectionType,
  Table,
  TableCellProps,
  TableProps,
} from 'react-virtualized';

import VirtualizedTableHeader from './VirtualizedTableHeader';
import VirtualizedTableCell from './VirtualizedTableCell';

import 'react-virtualized/styles.css';
import './VirtualizedTable.scss';

const DEFAULT_HEIGHT = 42;

export type VirtualizedTableProps = Pick<TableProps, 'disableHeader' | 'overscanRowCount' | 'scrollToIndex' | 'sortBy' | 'sortDirection'> &
  Pick<InfiniteLoaderProps, 'minimumBatchSize' | 'threshold'> & {
    headerHeight?: number;
    rowHeight?: number;
    component?: React.FC<TableCellProps>;
    className?: string;
    columns?: any[];
    list?: any[];
    onLoadMore?: (params: IndexRange) => Promise<any>;
    loading?: boolean;
  };

const VirtualizedTable: React.FC<VirtualizedTableProps> = ({
  disableHeader = false,
  headerHeight = DEFAULT_HEIGHT,
  overscanRowCount,
  scrollToIndex,
  rowHeight = DEFAULT_HEIGHT,
  sortBy,
  sortDirection,
  className,
  component,
  list = [],
  onLoadMore = (_: IndexRange) => Promise.resolve(),
  loading = false,
  columns = [],
}) => {
  const tableClasses = classNames('table', className);

  const sort = ({ sortBy, sortDirection }: { sortBy: string; sortDirection: SortDirectionType }) => {
    console.log(sortBy, sortDirection);
  };

  const rowGetter = ({ index }: Index) => {
    return list[index];
  };

  const noRowsRenderer = () => {
    return <div>No rows</div>;
  };

  const loadMoreRows = loading ? (_: IndexRange) => Promise.resolve() : onLoadMore;

  const isRowLoaded = ({ index }: Index) => !loading || index < list.length;

  return (
    // <InfiniteLoader isRowLoaded={isRowLoaded} loadMoreRows={loadMoreRows} rowCount={list.length}>
    //   {({ onRowsRendered, registerChild }) => (
    //     <AutoSizer style={{ minHeight: 300 }}>
    //       {({ width, height }) => (
    //         <Table
    //           ref={registerChild}
    //           disableHeader={disableHeader}
    //           headerHeight={headerHeight}
    //           height={height}
    //           gridStyle={{
    //             direction: 'inherit',
    //           }}
    //           onRowsRendered={onRowsRendered}
    //           noRowsRenderer={noRowsRenderer}
    //           className={tableClasses}
    //           overscanRowCount={overscanRowCount}
    //           rowHeight={rowHeight}
    //           rowGetter={rowGetter}
    //           rowCount={list.length}
    //           scrollToIndex={scrollToIndex}
    //           sort={sort}
    //           sortBy={sortBy}
    //           sortDirection={sortDirection}
    //           width={width}
    //         >
    //           {columns.map((column) => (
    //             <Column
    //               label={column.label}
    //               dataKey={column.dataKey}
    //               width={column.width}
    //               flexGrow={column.flexGrow}
    //               headerRenderer={VirtualizedTableHeader}
    //               cellRenderer={
    //                 component ? (props: TableCellProps) => <VirtualizedTableCell component={component} {...props} /> : undefined
    //               }
    //             />
    //           ))}
    //         </Table>
    //       )}
    //     </AutoSizer>
    //   )}
    // </InfiniteLoader>
    <div> </div>
  );
};

export default VirtualizedTable;
