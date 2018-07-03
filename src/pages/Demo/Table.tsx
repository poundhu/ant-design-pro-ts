import * as React from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import { Filter, BaseTable } from './components';


interface IUser {
  name: string;
  age: number;
  address: string;
  key: number;
}
interface TableDemoProps {
  dispatch: ({ }) => {};
  loading: boolean;
}

const columns: ColumnProps<IUser>[] = [{
  title: 'Name',
  dataIndex: 'name',
  filters: [{
    text: 'Joe',
    value: 'Joe',
  },
  {
    text: 'Jim',
    value: 'Jim',
  }, {
    text: 'Submenu',
    value: 'Submenu',
    children: [{
      text: 'Green',
      value: 'Green',
    }, {
      text: 'Black',
      value: 'Black',
    }],
  }],
  onFilter: (value, record) => record.name.indexOf(value) === 0,
  sorter: (a, b) => a.name.length - b.name.length,
}, {
  title: 'Age',
  dataIndex: 'age',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.age - b.age,
}, {
  title: 'Address',
  dataIndex: 'address',
  filters: [{
    text: 'London',
    value: 'London',
  }, {
    text: 'New York',
    value: 'New York',
  }],
  filterMultiple: false,
  onFilter: (value, record) => record.address.indexOf(value) === 0,
  sorter: (a, b) => a.address.length - b.address.length,
}];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: i,
    address: `London, Park Lane no. ${i}`,
  });
}

const mapStateToProps = ({ rule, loading }) => ({
  rule,
  loading: loading.models.rule,
});

@connect(mapStateToProps)
export default class TableDemo extends React.Component<TableDemoProps, any> {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  componentDidMount() {
    this.props.dispatch({
      type: 'rule/fetch',
    });
  }


  render() {
    const { loading } = this.props;
    const paginationProps = {
      showSizeChanger: true,
    };
    return (
      <PageHeaderLayout title="测试">
        <Card bordered={false}>
          <Filter />
          <BaseTable
            data={data}
            columns={columns}
          />
        </Card>
      </PageHeaderLayout>
    );
  }
}



