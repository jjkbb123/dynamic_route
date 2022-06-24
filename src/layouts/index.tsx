import { IRouteComponentProps } from 'umi';
import React from 'react';
import { history } from 'umi';
import { RollbackOutlined } from '@ant-design/icons';

export const ThemeContext = React.createContext('light1232');

export default function Layout({
  children,
  location,
  route,
  history,
  match,
}: IRouteComponentProps) {
  return (
    <div>
      <div className="nav">nav</div>
      <ThemeContext.Provider value="dark">
        <a onClick={history.goBack} style={{ fontSize: 50 }}>
          <RollbackOutlined />
        </a>
        {children}
      </ThemeContext.Provider>
      <style>
        {`
                        .nav {
                            text-align: center;
                        }   
                    `}
      </style>
    </div>
  );
}
