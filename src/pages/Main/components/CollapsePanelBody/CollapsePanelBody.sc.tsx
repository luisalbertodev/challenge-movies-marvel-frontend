import styled from 'styled-components';

export const CollapsePanelBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    max-width: 164px;
    padding-bottom: 1em;
  }

  p {
  }

  h5 {
    color: #5162ff;
  }

  ${(props) => props.theme.breakpoints.sm} {
    flex-direction: row;
    align-items: flex-start;

    img {
      max-width: 248px;
      padding-right: 1em;
      padding-bottom: 0px;
    }
  }
`;
