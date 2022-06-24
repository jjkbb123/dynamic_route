import { useState, useCallback, useMemo } from 'react';
import type { ReactElement, FC } from 'react';

import Child from './child';

const Memo: FC<{}> = (): ReactElement => {
  let [count, setCount] = useState(0);
  let [memo, setMomo] = useState(0);

  const CallBackChild = useMemo(() => Child, [count]);
  useMemo(() => {
    console.log('memo');
  }, [count]);

  return (
    <div>
      Memo
      <button
        onClick={() => {
          if (!(count % 3)) {
            setMomo((memo += 1));
          }
          setCount((count += 1));
        }}
      >
        test
      </button>
      <Child count={memo} />
      {/* <CallBackChild count={memo} /> */}
    </div>
  );
};
export default Memo;
