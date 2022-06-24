import type { ReactElement, FC } from 'react';
import React from 'react';

const Child: FC<{ count: number }> = (props): ReactElement => {
  console.log('child');
  console.log(props.count);

  return (
    <>
      <div>Child</div>
      <style>
        {`
                    `}
      </style>
    </>
  );
};
export default React.memo(Child);
