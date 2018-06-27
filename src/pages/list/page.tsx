import * as React from 'react';
import router from 'umi/router';
import styles from './page.css';


export class page extends React.Component<any, > {
  render() {
    return (
      <div className={styles.normal}>
        <h2>List Page</h2>
        <div
          onClick={() => {
            router.goBack();
          }}
        >
          Back
        </div>
      </div>
    )
  }
}

export default page
