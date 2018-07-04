import * as React from 'react';
import { connect } from 'dva';
import { Card, Button } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import { Filter, BaseTable } from './components';

import { ReduxAction } from 'interfaces/index';

interface TableDemoProps {
  dispatch: (pamas: ReduxAction) => void;
  loading: boolean;
  table: {
    list?: [any];
    pagination?: object;
  };
}


const mapStateToProps = ({ Demo, loading }) => ({
  table: Demo.table,
  loading: loading.effects['Demo/fetchList'],
});

@connect(mapStateToProps)
export default class TableDemo extends React.Component<TableDemoProps, any> {
  componentDidMount() {
    this.query({
      isPaid: 1,
    });
  }
  query = (pamams?: object): void => {
    this.props.dispatch({
      type: 'Demo/fetchList',
      payload: pamams,
    });
  }
  rollOut = () => {
    console.log('输出');
  }
  render() {
    const { loading, table } = this.props;
    const columns = [{
      title: '账号/公司名称',
      dataIndex: 'corpName',
      width: 250,
    },
    {
      title: '商机级别',
      width: 250,
      dataIndex: 'platCustomerSalesExtView.customerLevel',
    },
    {
      title: '是否付费',
      width: 100,
      dataIndex: 'serviceInstance.isPaid',
    },
    {
      title: '开通日期',
      dataIndex: 'serviceInstance.beginTime',
    },
    {
      title: '到期日期',
      dataIndex: 'serviceInstance.endTime',
    },
    {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <Button onClick={this.rollOut}>转出</Button>,
    }];

    return (
      <PageHeaderLayout>
        <Card bordered={false}>
          <Filter />
          <BaseTable
            data={table}
            columns={columns}
            loading={loading}
            query={this.query}
            bordered
          />
        </Card>
      </PageHeaderLayout>
    );
  }
}



