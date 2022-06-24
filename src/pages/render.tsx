import type { FC } from 'react';
import React, { createRef, useContext } from 'react';
import { history } from 'umi';

import DragList from './drag';
import Forward from './forward';
import { ThemeContext } from '@/layouts';

const RenderTsxComponent: FC<{}> = () => {
  const inputRef = createRef();
  const toComponent = (url: string) => {
    history.push(url);
  };
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className="renderBox">
      <button type="button" onClick={() => toComponent('/DragList')}>
        DragList
      </button>
      <button type="button" onClick={() => toComponent('/Forward')}>
        Forward
      </button>
      <button type="button" onClick={() => toComponent('/ExportExcel')}>
        ExportExcel
      </button>
      <button type="button" onClick={() => toComponent('/ExportPdf')}>
        ExportPdf
      </button>
      <button type="button" onClick={() => toComponent('/Exam')}>
        Exam
      </button>
      <button type="button" onClick={() => toComponent('/LineMove')}>
        LineMove
      </button>
      <button type="button" onClick={() => toComponent('/MouseLine')}>
        MouseLine
      </button>
      <button type="button" onClick={() => toComponent('/Colors')}>
        Colors
      </button>
      <button type="button" onClick={() => toComponent('/ClassContext')}>
        ClassContext
      </button>
      <button type="button" onClick={() => toComponent('/NoLayout')}>
        NoLayout
      </button>
      <button type="button" onClick={() => toComponent('/Ts')}>
        Ts
      </button>
      <button type="button" onClick={() => toComponent('/Memo')}>
        Memo
      </button>
      <button type="button" onClick={() => toComponent('/Test')}>
        Test
      </button>
      <button type="button" onClick={() => toComponent('/DynamicTest')}>
        DynamicTest
      </button>
      <button type="button" onClick={() => toComponent('/TableDrag')}>
        TableDrag
      </button>

      <style>
        {`
            .renderBox {
              width: 80%;
              margin: 80px auto;
              text-align: center;
            }
            .renderBox button {
              margin: 0 15px;
            }
          `}
      </style>
    </div>
  );
};
export default RenderTsxComponent;
