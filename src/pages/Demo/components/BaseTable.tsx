import * as React from 'react';
import {
  Table, Alert
} from 'antd';

export default class TableDemo extends React.PureComponent<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [],
      defalultPagination: {
        showQuickJumper: true,
        showSizeChanger: true,
      },
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
  onPageChange(pageNumber: number, pageSize: number) {
    console.log(pageNumber, pageSize);
  }
  handleModalVisible(visible: boolean) {
    this.setState({
      modalVisible: visible,
    });
  }
  render() {
    const { loading, data, columns } = this.props;
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const paginationProps = {
      onChange: this.onPageChange,
      showSizeChanger: true,
      onShowSizeChange: this.onShowSizeChange,
    };
    return (
      <div>
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
        <Table
          dataSource={data}
          pagination={paginationProps}
          loading={loading}
          columns={columns}
          bordered
          rowSelection={rowSelection}
        />
      </div>

    );
  }
}