import type { ReactElement, FC } from "react";
import React, { useState, useEffect } from "react";

interface IProps {
  dragList: IDragListItem[];
  draggable?: boolean;
}
interface IDragListItem {
  title: string;
  name: string;
  key: number;
}

type Node = HTMLElement;
interface DragEvent extends React.DragEvent<HTMLDivElement> {
  target: Node;
}
type IArrHundle = "push" | "unshift";
type ITopOrDown = "top" | "down";

const DragList: FC<IProps> = (props): ReactElement => {
  const { draggable = true } = props;

  const [, setDragName] = useState<string>("");
  const [topOrDown, setTopOrDown] = useState<ITopOrDown>("down");
  const [dragList, setDragList] = useState<IDragListItem[]>([]);

  useEffect(() => {
    const configList = [
    {
      title: "/config1",
      name: "巡洋舰1",
      key: 1,
    }, {
      title: "/config2",
      name: "巡洋舰2",
      key: 2,
    },
    {
      title: "/config3",
      name: "巡洋舰3",
      key: 3,
    },
    {
      title: "/config4",
      name: "巡洋舰4",
      key: 4,
    },
  ];
    const { dragList = configList } = props;
    setDragList(dragList);
  }, []);

  const shiftOrPush = (
    dragItemIndex: number,
    type: IArrHundle,
    dragItem: IDragListItem,
    isDownDrag: boolean,
  ) => {
    const deletedDragStartItemList = dragList.filter(
      (item) => item.title !== dragItem.title,
    ); // 先筛选出要挪动位置的元素
    const isUnshiftDownIndex = isDownDrag ? dragItemIndex - 1 : dragItemIndex; // 向下移动unshift
    const isPushDownIndex = isDownDrag ? dragItemIndex : dragItemIndex + 1; // // 向下移动push
    if (type === "unshift") {
      deletedDragStartItemList.splice(isUnshiftDownIndex, 0, dragItem);
    } else {
      deletedDragStartItemList.splice(isPushDownIndex, 0, dragItem);
    }
    setDragList(deletedDragStartItemList);
  };
  // 元素正在拖动时触发
  const ondrop = (e: DragEvent) => {
    const { target } = e;
    const targetValue = target.textContent;
    // const targetHeight = target.offsetHeight;
    const data = e.dataTransfer.getData("dragtransfer");
    const targetIndex = dragList.findIndex(
      (item) => targetValue === item.title,
    );
    const currentIndex = dragList.findIndex((item) => data === item.title);
    const isDownDrag = currentIndex < targetIndex;
    if (data === targetValue) {
      target.parentElement!.className = "dragItem";
      return;
    }
    if (topOrDown === "down") {
      shiftOrPush(targetIndex, "push", dragList[currentIndex], isDownDrag);
    } else {
      shiftOrPush(targetIndex, "unshift", dragList[currentIndex], isDownDrag);
    }
    // if (offsetY >= (targetHeight / 2)) {
    // 	shiftOrPush(targetIndex, 'push', { title: data }, isDownDrag)
    // } else {
    // 	shiftOrPush(targetIndex, 'unshift', { title: data }, isDownDrag)
    // }
    e.preventDefault();
    target.parentElement!.className = "dragItem";
    setDragName(data);
  };
  // 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
  const ondragover = (e: DragEvent) => {
    e.preventDefault();
  };
  // GlobalEventHandlers
  // 当被鼠标拖动的对象进入其容器范围内时触发此事件
  const dragenter = (e: DragEvent) => {
    const {
      target: { parentElement },
    } = e;
    const targetParentDom = parentElement;
    if (topOrDown === "down") {
      targetParentDom!.className = "dragItem enterTableBottomDom";
    } else {
      targetParentDom!.className = "dragItem enterTableTopDom";
    }
    /* if (offsetY >= (offsetHeight / 2)) {
			targetParentDom.className = "dragItem enterTableBottomDom";
		} else {
			targetParentDom.className = "dragItem enterTableTopDom";
		} */
  };
  // 当被鼠标拖动的对象离开其容器范围内时触发此事件
  const dragleave = (e: DragEvent) => {
    const { target } = e;
    const targetParentDom = target.parentElement;
    targetParentDom!.className = "dragItem";
  };
  // 用户完成元素拖动后触发
  // const dragend = () => {}
  // 用户开始拖动元素时触发
  const ondragStart = (e: DragEvent, title: string) => {
    e.dataTransfer.setData("dragtransfer", title);
  };
  // 在一个拖动过程中，释放鼠标键时触发此事件 350ms/tigger
  const dragging = (e: DragEvent) => {
    const {
      nativeEvent: { offsetY },
    } = e;
    setTopOrDown(offsetY > 0 ? "down" : "top");
  };
  return (
    <>
      <div className="dragBox">
        {dragList.map((item) => (
          <div key={item.title} className="dragItem" onDragOver={ondragover}>
            <p
              draggable={draggable}
              onDragStart={(e: DragEvent) => ondragStart(e, item.title)}
              onDrag={dragging}
              onDragEnter={dragenter}
              onDragLeave={dragleave}
              onDrop={ondrop}
            >
              {/* <img
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                style={{ width: 80 }}
                alt="pc1"
              /> */}
              <span>{item.title}</span>
            </p>
          </div>
        ))}
      </div>
      <style>
        {`
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}
    		.dragBox {
    		    width: 50%;
    		    margin: 50px auto;
						cursor: move;
    		}
    		.dragItem {
						height: 88px;
    		    border: 1px solid #000;
    		}
			.dragItem:last-of-type {
				height: 100px;
			}
			.dragItem p {
				height: 100%;
			}
			.getDrag {
    		margin: 50px auto;
				width: 200px;
				height: 80px;
				border: 1px solid #ccc;
			}
			.enterTableBottomDom {
				border-bottom: 3px dashed #64a3f0;
				margin-bottom: 5px;
			}
			.enterTableTopDom {
				border-top: 3px dashed #64a3f0;
				margin-top: 5px;
			}
			.currentDragItem {
				border: 1px dashed red;
			}
    	`}
      </style>
    </>
  );
};
export default DragList;
