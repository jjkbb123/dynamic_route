import type { FC } from "react";
import React, { createRef } from "react";
import { history } from "umi";

import DragList from "./drag";
import Forward from "./forward";

const RenderTsxComponent: FC<{}> = () => {
  const inputRef = createRef();
  const toComponent = (url: string) => {
    history.push(url);
  };

  return (
    <div className="renderBox">
      <button type="button" onClick={() => toComponent("/DragList")}>DragList</button>
      <button type="button" onClick={() => toComponent("/Forward")}>Forward</button>
      <button type="button" onClick={() => toComponent("/ExportExcel")}>ExportExcel</button>
      <button type="button" onClick={() => toComponent("/ExportPdf")}>ExportPdf</button>
      <button type="button" onClick={() => toComponent("/Exam")}>Exam</button>
      <style>
        {
          `
            .renderBox {
              width: 80%;
              margin: 80px auto;
              text-align: center;
            }
            .renderBox button {
              margin: 0 15px;
            }
          `
        }
      </style>
    </div>
  );
};
export default RenderTsxComponent;
