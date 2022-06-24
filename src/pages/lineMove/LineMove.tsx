import type { ReactElement, FC } from 'react';
import { useEffect, useState, useRef } from 'react';
import { Button, Space } from 'antd';

const LineMove: FC<{}> = (): ReactElement => {
  let [x, setX] = useState<number>(0);
  let [y, setY] = useState<number>(10);
  let [timer, setTimer] = useState<NodeJS.Timeout>();
  let [isNoToLine, setIsNoToLine] = useState<number>(0);
  const canvas1 = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    draw(4);
  }, []);

  const draw = (direct: number) => {
    clearTimeout(timer as NodeJS.Timeout);
    const canvas = canvas1.current;
    const ctx = canvas!.getContext('2d');
    ctx?.beginPath();
    ctx?.moveTo(x, y);
    switch (direct) {
      case 1:
        if (direct === isNoToLine) {
          break;
        }
        setIsNoToLine(2);
        setY((y -= 10));
        ctx?.lineTo(x, y);
        break;
      case 2:
        if (direct === isNoToLine) {
          break;
        }
        setIsNoToLine(1);
        setY((y += 10));
        ctx?.lineTo(x, y);
        break;
      case 3:
        if (direct === isNoToLine) {
          break;
        }
        setIsNoToLine(4);
        setX((x -= 10));
        ctx?.lineTo(x, y);
        break;
      case 4:
        if (direct === isNoToLine) {
          break;
        }
        setIsNoToLine(3);
        setX((x += 10));
        ctx?.lineTo(x, y);
        break;
      default:
        break;
    }
    ctx?.stroke();
    setTimer(setTimeout(() => draw(direct), 1000));
  };

  return (
    <>
      <canvas
        ref={canvas1}
        width="600"
        height="400"
        style={{ verticalAlign: 'middle' }}
        onMouseMove={() => console.log(1)}
      ></canvas>
      <Space size="large">
        <Button onClick={() => draw(1)}>⬆</Button>
        <Button onClick={() => draw(2)}>⬇</Button>
        <Button onClick={() => draw(3)}>⬅</Button>
        <Button onClick={() => draw(4)}>➡</Button>
        <Button onClick={() => clearInterval(timer as NodeJS.Timeout)}>
          Stop
        </Button>
        <Button onClick={() => clearInterval(stop)}>Open</Button>
      </Space>
    </>
  );
};
export default LineMove;
