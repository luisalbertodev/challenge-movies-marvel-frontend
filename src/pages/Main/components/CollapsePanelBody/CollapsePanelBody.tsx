import * as S from './CollapsePanelBody.sc';

const CollapsePanelBody = ({ coverUrl, title, overview, directedBy }) => {
  return (
    <S.CollapsePanelBody>
      <img src={coverUrl} alt={title} />
      <div>
        <h5>
          Director:
          {directedBy}
        </h5>
        <p>{overview}</p>
      </div>
    </S.CollapsePanelBody>
  );
};

export default CollapsePanelBody;
