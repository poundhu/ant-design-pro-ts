import * as React from 'react';
import { Form } from 'antd';
import styles from './TableList.less';

const FormItem = Form.Item;

interface Search {
  renderBase?: (() => React.ReactType) | string | JSX.Element;
  renderExtends?: (() => React.ReactType) | string | JSX.Element;
  children?: false | JSX.Element | JSX.Element[];
  form: any;
}

class Search extends React.Component<Search, any> {
  state = {
    expandForm: false,
  };
  toggleForm = () => {
    this.setState({
      expandForm: !this.state.expandForm,
    });
  }
  handleSearch = (e) => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const values = {
        ...fieldsValue,
        updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf(),
      };
      return values;
    });
  }
  handleFormReset = () => {
    const { form } = this.props;
    form.resetFields();
  }

  render() {
    const { renderBase, renderExtends, children } = this.props;
    const { expandForm } = this.state;
    return (
      <div className={styles.tableListForm}>
        <Form onSubmit={this.handleSearch} layout="inline">
          {
            renderBase ?
              typeof renderBase === 'function' ? renderBase() : renderBase
              : null
          }
          {children}
          {
            expandForm && (renderExtends ?
              typeof renderExtends === 'function' ? renderExtends() : renderExtends
              : null)
          }
        </Form>
      </div>
    );
  }
}


export default Form.create()(Search);