import type { ReactElement, FC, EventHandler, ChangeEvent } from 'react';
import { useState } from 'react';
import request from 'umi-request';
import { Input, Button } from 'antd';

interface Fun<T> {
  onchange: (asd: T) => T;
}

const Ts: FC<{}> = (): ReactElement => {
  const [testPromise, setTestPromise] = useState<Promise<string>>(() =>
    Promise.resolve(''),
  );

  const fun: Fun<number> = {
    onchange: (asd: number) => {
      return asd;
    },
  };
  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestPromise(Promise.resolve(e.target.value));
  };
  const finish = () => {
    console.log('ajax');
    testPromise
      .then(
        (val) => new Promise((res, rej) => res(1)),
        (err) => console.log(err),
      )
      .then((val) => val.then((value) => console.log(value)));
  };

  return (
    <div>
      Ts
      <Input onChange={onchange} />
      <Button onClick={finish}>submit</Button>
    </div>
  );
};
export default Ts;
