import * as React from 'react';
import {
  Row, Col, Form, Input, Select, Button, Modal
} from 'antd';
import styles from './BaseTable.less';

const { Option } = Select;
const FormItem = Form.Item;

interface IFilterProps {
  form: any;
  query?: (pasams?) => {};
  renderHeader?: (() => React.ReactType) | string | JSX.Element;
  renderFooter?: (() => React.ReactType) | string | JSX.Element;
}

class Filter extends React.PureComponent<IFilterProps, any>{
  state = {
    visible: false,
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({
      visible: false,
    });
  }
  handleCancel = () => {
    this.setState({
      visible: false,
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
  renderSimpleForm() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" onSubmit={this.handleSearch}>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="规则编号">
              {getFieldDecorator('no')(
                <Input placeholder="请输入" />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <Button
              type="primary"
              onClick={this.showModal}
            >
              高级搜索
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
  renderExtendsForm() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" onSubmit={this.handleSearch}>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="规则编号">
              {getFieldDecorator('no')(
                <Input placeholder="请输入" />
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="使用状态">
              {getFieldDecorator('status')(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  <Option value="0">关闭</Option>
                  <Option value="1">运行中</Option>
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
  render() {
    const { visible } = this.state;
    return (
      <div>
        {
          <div className={styles.tableListForm}>
            {this.renderSimpleForm()}
          </div>
        }
        <Modal
          title="高级搜索"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          mask={true}
          style={{ top: 165 }}
          width={780}
        >

          <div className={styles.tableListForm}>
            {visible && this.renderExtendsForm()}
          </div>
        </Modal>
      </div>
    );
  }
}

export default Form.create()(Filter);