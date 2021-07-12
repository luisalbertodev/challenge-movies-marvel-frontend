/*
 * Code for Menu navigation
 *
 */

import { useState, useEffect, FC, ReactElement } from 'react';
// import { useLocation, useHistory } from 'react-router-dom';
import MenuOutlined from '@ant-design/icons/MenuOutlined';
// import Menu from 'antd/lib/menu';
import * as S from './Layout.sc';

interface Props {
  children: ReactElement;
}

const Layout: FC<Props> = ({ children }) => {
  // const [currentKey, setKey] = useState<string[]>([]);
  // const location = useLocation();
  // const history = useHistory();

  // const onSelect = ({ key }) => history.push(key);

  // useEffect(() => {
  //   setKey([location.pathname]);
  // }, [location]);

  return (
    <S.Layout data-aos="fade-down">
      <S.Layout.Header>
        <div className="logo">
          <MenuOutlined />
        </div>
        {/* <Menu theme="dark" mode="horizontal" selectedKeys={currentKey} onSelect={onSelect}>
          <Menu.Item key="/">Inicio</Menu.Item>
          <Menu.Item key="/favoritos">Favoritos</Menu.Item>
        </Menu> */}
      </S.Layout.Header>
      <S.Layout.Content>
        <div className="site-layout-background">{children}</div>
      </S.Layout.Content>
      <S.Layout.Footer>Challenge Movies Marvel ©2021</S.Layout.Footer>
    </S.Layout>
  );
};

export default Layout;
