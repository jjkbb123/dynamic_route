import type { ReactElement, FC } from 'react';
import { useState, useEffect, Component } from 'react';
import { Table, Row, Col } from 'antd';
// import data from './xml/data.xml';
// import { test } from 'test_num2word';
// const A = require('./ClassContext')
// import path from 'path'

interface DragEvent extends React.DragEvent<HTMLDivElement> {
  target: Node & HTMLDivElement;
}
type render = (text: string) => ReactElement;
interface IColumns {
  title: ReactElement;
  dataIndex: string;
  key: string;
  width: string;
  render?: render;
}
const TableDrag: FC<{}> = (): ReactElement => {
  // test();
  const table = {
    TableDrag: () => {
      const [startValue, setStartValue] = useState('');
      const [leaveValue, setLeaveValue] = useState('');
      const [dom, setDom] = useState<DragEvent['target']>();
      const [columns, setColumns] = useState<IColumns[]>([]);
      const [columns2, setColumns2] = useState<IColumns[]>([]);
      useEffect(() => {
        setColumns([
          {
            title: render('姓名', 1),
            dataIndex: 'name',
            key: 'name',
            width: `${6 / 100}%`,
          },
          {
            title: render('年龄', 1),
            dataIndex: 'age',
            key: 'age',
            width: `${6 / 100}%`,
          },
          {
            title: render('住址1', 1),
            dataIndex: 'address',
            key: 'address',
            width: `${6 / 100}%`,
          },
        ]);
        setColumns2([
          {
            title: render('姓名22222', 2),
            dataIndex: 'name2',
            key: 'name2',
            width: `${6 / 100}%`,
          },
          {
            title: render('年龄22222', 2),
            dataIndex: 'age2',
            key: 'age2',
            width: `${6 / 100}%`,
          },
          {
            title: render('住址22222', 2),
            dataIndex: 'address2',
            key: 'address2',
            width: `${6 / 100}%`,
          },
        ]);
      }, []);
      const render = (text: string, type: number) => {
        return (
          <div
            draggable
            onDragEnter={(e: DragEvent) => onDragLeave(e, type)}
            // onDragLeave={onDragLeave}
            onDragStart={onDragStart}
          >
            {text}
          </div>
        );
      };
      const onDragLeave = (e: DragEvent, type: number) => {
        const editeColumn = type === 1 ? columns : columns2;
        dom!.style.border = 'none';
        dom!.style.height = '';
        const targetValue = e.target.innerText;
        const targetColumnItemIndex = editeColumn.findIndex(
          (item) => item?.title?.props?.children === targetValue,
        );
        const targetColumnItem = editeColumn.find(
          (item) => item?.title?.props?.children === targetValue,
        );
        const startColumnItemIndex = editeColumn.findIndex(
          (item) => item?.title?.props?.children === startValue,
        );
        const startColumnItem = editeColumn.find(
          (item) => item?.title?.props?.children === startValue,
        );
        editeColumn[targetColumnItemIndex] = startColumnItem!;
        editeColumn[startColumnItemIndex] = targetColumnItem!;
        type === 1
          ? setColumns([...editeColumn])
          : setColumns2([...editeColumn]);
      };
      const onDragStart = (e: DragEvent) => {
        const selfValue = e.target.innerText;
        e.target.style.border = 'dashed 1px #ccc';
        e.target.style.height = '40px';
        setDom(e.target);
        setStartValue(selfValue);
      };

      const dataSource = [
        {
          key: '1',
          name: '胡彦斌2',
          age: 32,
          address: '西湖区湖底公园2号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ];
      const dataSource2 = [
        {
          key: '1',
          name2: '胡彦斌2',
          age2: 32,
          address2: '西湖区湖底公园2号',
        },
        {
          key: '2',
          name2: '胡彦祖',
          age2: 42,
          address2: '西湖区湖底公园1号',
        },
      ];

      [columns, columns2].forEach((cItem, i) => {
        cItem.forEach((item) => {
          if (item) {
            item.render = (text) => <span>{text}</span>;
            item.title = render(item?.title?.props?.children, i + 1);
          }
        });
      });
      const classComponent = {
        B: class B extends Component {
          state = {
            ClsComponent: class ClsComponent extends Component {
              render() {
                return <div>ClsComponent</div>;
              }
            },
          };
          render() {
            const { ClsComponent } = this.state;
            return (
              <>
                <div>BBB CLASS_COMPONENT</div>
                <button
                  onClick={() => {
                    /* const component = './ClassContex' + 't'
                                    const ClsComponent = require('./ClassContex' + 't')
                                    console.log(ClsComponent);
                                    this.setState({
                                        ClsComponent: ClsComponent.default
                                    }) */
                    const file = 'ClassContext';
                    import(`./${file}.tsx`).then((ClsComponent) => {
                      console.log(ClsComponent, 'ClsComponent');
                      this.setState({
                        ClsComponent: ClsComponent.default,
                      });
                    });
                  }}
                >
                  add
                </button>
                <ClsComponent />
              </>
            );
          }
        },
      };
      return (
        <>
          <Row style={{ padding: '0 15px' }}>
            <Col span={11}>
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
              />
            </Col>
            <Col span={2} style={{ background: '#000', color: '#fff' }}>
              一堵墙
            </Col>
            <Col span={11}>
              <Table
                dataSource={dataSource2}
                columns={columns2}
                pagination={false}
              />
            </Col>
          </Row>
          <classComponent.B />
        </>
      );
    },
  };
  return <table.TableDrag />;
};
export default TableDrag;
