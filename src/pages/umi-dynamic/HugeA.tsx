import type { ReactElement, FC } from 'react';
import HugeB from './HugeB';
import { connect } from 'umi';

const HugeA: FC<{}> = ({ dispatch }): ReactElement => {
  return (
    <div>
      HugeA
      <button onClick={() => dispatch({ type: 'dynamic/test' })}>
        test_modal_dynamic
      </button>
      <HugeB />
    </div>
  );
};
HugeA.wrappers = ['./wrapper/wrapper'];

export default connect()(HugeA);
