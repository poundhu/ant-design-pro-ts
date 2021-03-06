import * as React from 'react';

interface IStandardTableProps {
  selectedRows?: any;
  loading?: boolean;
  data?: any;
  columns?: any;
  onSelectRow?: (selectedRows) => void;
  rowKey?: any;
  onChange?: (pagination, filters, sorter) => void;
}


export default class StandardTable extends React.PureComponent<IStandardTableProps, any> { }