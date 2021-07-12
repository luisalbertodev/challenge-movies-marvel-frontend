import styled, { css } from 'styled-components';

export const WrapperInfiniteScroll = styled.div`
  height: calc(100vh - 200px);
  padding: 0px 4px;
  overflow: auto;
  border: 1px solid #e8e8e8;
  border-radius: 4px;

  .ant-collapse-header {
    display: flex;
    align-items: center;
    background: #fff;
  }

  ${(props) => props.theme.breakpoints.sm} {
    padding: 8px 24px;
  }
`;

export const LoadingContainer = styled.div`
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
`;
