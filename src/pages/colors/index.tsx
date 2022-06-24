import type {
  ReactElement,
  FC,
  ChangeEvent,
  ChangeEventHandler,
  EventHandler,
} from 'react';
import { useRef, useEffect } from 'react';

// 16777215  ---   65535
//    |            |
//    0          771
const Colors: FC<{}> = (): ReactElement => {
  const colorRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = colorRef.current!;
    const ctx = canvas.getContext('2d');
    for (let i = 0; i < 400; i++) {
      for (let j = 0; j < 400; j++) {
        const bit = to16bit(Number(`${i}${j}`));
        ctx!.fillStyle = `#${bit}`;
        ctx?.fillRect(i, j, 1, 1);
      }
      // ctx?.beginPath();
      // ctx?.moveTo(0, 0);
      // ctx!.strokeStyle = `#${bit}`;
      // ctx?.lineTo(i, i)
      // ctx?.stroke();
    }
  }, []);

  const to16bit = (str: number): string => {
    let bit16 = String(Number(str).toString(16));
    let bitStr = '';
    for (let i = 0; i < 6 - bit16.length; i++) {
      bitStr += '0';
    }
    bit16 = `${bitStr}${bit16}`;
    return bit16;
  };

  const compute = (e: ChangeEvent<any>) => {
    const { value } = e.target;
    console.log(Number(value).toString(16));
  };

  return (
    <canvas
      ref={colorRef}
      width="400"
      height="400"
      onMouseMove={(e) => console.log(e)}
    ></canvas>
  );
};
export default Colors;
