import type {
  ReactElement,
  FC,
  MouseEventHandler,
  EventHandler,
  MouseEvent,
  DetailedHTMLProps,
  CanvasHTMLAttributes,
} from 'react';
import { useRef, useEffect, useState } from 'react';

const MouseLine: FC<{}> = (): ReactElement => {
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isEraserMove, setIsEraserMove] = useState<boolean>(false);
  const [xAndY, setXAndY] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const mouseLineCanvas = useRef<HTMLCanvasElement>(null);
  const eraserRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getCanvas();
  }, []);

  const getCanvas = () => {
    const canvas = mouseLineCanvas.current;
    const canvasCtx = (canvas as HTMLCanvasElement).getContext('2d');
    setCtx(canvasCtx);
  };

  const startBegin = (type: string = '', e: MouseEvent) => {
    const { clientX, clientY } = e;
    if (type) {
      setIsStart(true);
    } else {
      setIsStart(false);
    }
    ctx?.beginPath();
    ctx?.moveTo(clientX, clientY);
  };

  const draw = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const earser = eraserRef.current!;
    setXAndY({
      x: clientX,
      y: clientY,
    });
    if (isEraserMove) {
      earser.style.top = `${clientY - 15}px`;
      earser.style.left = `${clientX - 15}px`;
    } else {
      earser.style.top = '0';
      earser.style.left = '0';
    }
    if (!isStart) {
      return;
    }
    ctx?.lineTo(clientX, clientY);
    ctx?.stroke();
  };

  const eraserDown = (e: MouseEvent) => {
    setIsEraserMove(true);
  };

  const eraserUp = () => {
    setIsEraserMove(false);
  };

  return (
    <>
      <canvas
        ref={mouseLineCanvas}
        width="1920"
        height="400"
        onMouseMove={draw}
        onMouseDown={(e) => startBegin('start', e)}
        onMouseUp={(e) => startBegin(undefined, e)}
      ></canvas>
      <div onClick={(e) => e.preventDefault()}>
        动手画画
        <hr />
      </div>
      <div
        className="eraser"
        ref={eraserRef}
        onMouseDown={eraserDown}
        onMouseUp={eraserUp}
      ></div>
      <style>
        {`
                        div {
                            text-align: center;
                            -moz-user-select:none;
                            -webkit-user-select:none;
                            user-select:none;
                        }
                        .eraser {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                            border: 1px solid #ccc;
                            box-shadow: 2px 1px 1px 0px #ccc;
                        }
                    `}
      </style>
    </>
  );
};
export default MouseLine;
