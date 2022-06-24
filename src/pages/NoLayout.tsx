import type { ReactElement, FC } from 'react';
import { history } from 'umi';

const NoLayout: FC<{}> = (): ReactElement => {
  return (
    <>
      <div>NoLayout</div>
      <a onClick={history.goBack}>goback</a>
    </>
  );
};
export default NoLayout;
