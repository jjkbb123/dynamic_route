import type { ReactElement, FC } from 'react';
import { dynamic } from 'umi';
import HugeA from './HugeA';

const DynamicTest: FC<{}> = (): ReactElement => {
  return <div>DynamicTest</div>;
};
export default HugeA;
// export default dynamic({
//     loader: async function () {
//         const { default: HugeA } = await import(
//       /* webpackChunkName: "external_A" */ './HugeA'
//         );
//         return HugeA;
//     },
// });
