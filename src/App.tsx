import { Fragment } from 'react';
import { DatePicker } from 'antd';
import { Test } from '@components/test';
const App = () => {
  return (
    <Fragment>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div>
          <Test />
          <DatePicker />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
