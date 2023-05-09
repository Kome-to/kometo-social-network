import React from 'react';
import { TableHeaderProps } from 'react-virtualized';

const VirtualizedTableHeader: React.FC<TableHeaderProps> = ({ columnData, dataKey, disableSort, label, sortBy, sortDirection }) => {
  return <span className="table__header">{label}</span>;
};

export default VirtualizedTableHeader;
