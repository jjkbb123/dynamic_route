import type { ReactElement, FC } from 'react';
import { Redirect } from 'umi';

const Wrapper: FC<{}> = (props): ReactElement => {
  const isLogin = true;
  if (!isLogin) {
    return <Redirect to="/test" />;
  } else {
    return <div>Wrapper{props.children}</div>;
  }
};
export default Wrapper;
