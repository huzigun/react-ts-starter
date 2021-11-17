import { FC, Fragment } from 'react';

export interface TestProps {}

export const Test: FC<TestProps> = (props) => {
  return (
    <Fragment>
      <h1>Hello huzigun</h1>
    </Fragment>
  );
};
