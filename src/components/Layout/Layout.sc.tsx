import LayoutAntd from 'antd/lib/layout';
import styled from 'styled-components';

export const Layout = styled(LayoutAntd)`
  .logo {
    float: left;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    margin: 16px 24px 16px 0;

    & span {
      width: 32px;
    }

    & svg {
      color: white;
      width: 100%;
      height: 100%;
    }
  }

  .ant-layout-header {
    position: fixed;
    z-index: 1;
    width: 100%;
  }

  .ant-layout-content {
    padding: 0px 8px;
    margin-top: 82px;
  }

  .site-layout-background {
    padding: 0px;
    background: #fff;
    min-height: calc(100vh - 150px);
  }

  .ant-layout-footer {
    text-align: center;
  }

  ${(props) => props.theme.breakpoints.sm} {
    .ant-layout-content {
      padding: 0px 50px;
      margin-top: 94px;
    }

    .site-layout-background {
      padding: 24px;
    }
  }
`;
