import * as React from 'react';
import { Link } from 'dva/router';
import PageHeader from '../components/PageHeader';
import styles from './PageHeaderLayout.less';

interface PageHeaderLayout {
  children?: React.ReactNode;
  wrapperClassName?: string;
  top?: string;
  titile?: string;
}
export default ({ children, wrapperClassName, top, ...restProps }: PageHeaderLayout) => (
  <div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
    {top}
    <PageHeader key="pageheader" {...restProps} linkElement={Link} />
    {children ? <div className={styles.content}>{children}</div> : null}
  </div>
);