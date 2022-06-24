import React from 'react';
import type { ReactElement, FC } from 'react';
import { Button, Table } from 'antd';
import ExcelXmlTemplate from './template';
import img from '../assets/images/compatible_chrome.gif';

const ExportExcel: FC<{}> = (): ReactElement => {
  const MemoizedNestedComponent = React.useCallback(
    () => (
      <Button type="primary" onClick={() => exportExcel()}>
        ExportExcel
      </Button>
    ),
    [],
  );
  const base64 = (string: string) =>
    window.btoa(unescape(encodeURIComponent(string)));
  const exportExcel = () => {
    const link = document.createElement('a');
    link.href = `data:application/vnd.ms-excel;base64,${base64(
      ExcelXmlTemplate,
    )}`;
    link.download = 'test.xls';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <div style={{ width: 600, margin: '80px auto' }}>
      <Table
        dataSource={dataSource}
        columns={columns}
        footer={MemoizedNestedComponent}
      />
      <img src={img} alt="img" />
    </div>
  );
};
export default ExportExcel;
