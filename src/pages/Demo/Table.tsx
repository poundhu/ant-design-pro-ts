import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import {
  Table, Modal, Card, Dropdown, Button, Icon
} from 'antd';
import { ColumnProps } from 'antd/lib/table';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from '../List/TableList.less';

interface IUser {
  owner: string;
  progress: number;
  status: number;
  description: number;
  createdAt: object;
  title: string;
  callNo: number;
  avatar: string;
  href: string;
}

const columns: ColumnProps<IUser>[] = [{
  title: '姓名',
  dataIndex: 'owner',
  key: 'owner',
}, {
  title: '描述',
  dataIndex: 'description',
  key: 'description',
}, {
  title: '状态',
  dataIndex: 'status',
  key: 'status',
}];

@connect(({ rule, loading }) => ({
  rule,
  loading: loading.models.rule,
}))
export default class TableList extends PureComponent<any, any> {
  componentDidMount() {
    this.props.dispatch({
      type: 'rule/fetch',
    });
  }
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  }
  render() {
    const { rule, loading } = this.props;
    const { list, pagination } = rule.data;
    return (
      <PageHeaderLayout title="测试">
        <Table
          dataSource={list}
          pagination={pagination}
          loading={loading}
          columns={columns}
          bordered

        />
      </PageHeaderLayout>
    );
  }
}
