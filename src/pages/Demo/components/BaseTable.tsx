import * as React from 'react';
import {
  Table, Alert
} from 'antd';
import styles from './BaseTable.less';

interface IBaseTableProps {
  loading?: boolean;
  query?: (pasams?: object) => void;
  bordered?: boolean;
  columns: any;
  data: {
    list?: [any];
    pagination?: object;
  };
}

export default class BaseTable extends React.PureComponent<IBaseTableProps, any> {
  static defaultProps = {
    dataSource: [],
    pagination: {},
    bordered: true,
  };
  constructor(props) {
    super(props);
    this.state = {
      pageSize: 20,
      currentPage: 1,
      selectedRowKeys: [],
      selectedRows: [],
    };
  }
  cleanSelectedKeys = () => {
    this.setState({
      selectedRowKeys: [],
    });
  }
  onShowSizeChange = (current: number, pageSize: number) => {
    console.log(current, pageSize);
  }
  onSelectChange = (selectedRowKeys: [number]) => {
    this.setState({ selectedRowKeys });
  }
  onPageChange = (pagination) => {
    if (pagination.current) {
      const { pageSize, current } = pagination;
      this.setState({
        pageSize,
        current,
      });
      this.props.query({
        pageSize: pageSize,
        currentPage: current,
      });
    }
  }
  handleModalVisible(visible: boolean) {
    this.setState({
      modalVisible: visible,
    });
  }
  render() {
    const { loading, data, columns, bordered } = this.props;
    const { selectedRowKeys } = this.state;
    const { list, pagination } = data;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const paginationProps = {
      onChange: this.onPageChange,
      selectedRowKeys: [],
      showSizeChanger: true,
      selectedRows: [],
      onShowSizeChange: this.onShowSizeChange,
      ...pagination,
      ...this.state,
    };
    return (
      <div className={styles.baseTable}>
        <div className={styles.tableAlert}>
          <Alert
            message={
              <React.Fragment>
                已选择
              <a style={{ fontWeight: 600 }}>
                  {selectedRowKeys.length}
                </a> 项&nbsp;&nbsp;
              <a onClick={this.cleanSelectedKeys} style={{ marginLeft: 24 }}>
                  清空
              </a>
              </React.Fragment>
            }
            type="info"
            showIcon
          />
        </div>
        <Table
          dataSource={list}
          pagination={paginationProps}
          loading={loading}
          columns={columns}
          bordered={bordered}
          onChange={this.onPageChange}
          rowSelection={rowSelection}
          rowKey={'id'}
        />
      </div>
    );
  }
}