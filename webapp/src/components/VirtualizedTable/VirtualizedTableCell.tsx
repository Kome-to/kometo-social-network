import React from 'react';
import { TableCellProps } from 'react-virtualized';

const VirtualizedTableCell = ({ component: Component, ...props }: TableCellProps & { component: React.FC<TableCellProps> }) => {
  return <Component {...props} />;
};

export default VirtualizedTableCell;
