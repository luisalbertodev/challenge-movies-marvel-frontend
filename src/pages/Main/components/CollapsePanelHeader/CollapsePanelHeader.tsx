import List from 'antd/lib/list';
import Avatar from 'antd/lib/avatar';

import CalendarOutlined from '@ant-design/icons/CalendarOutlined';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';

import * as S from './CollapsePanelHeader.sc';

const CollapsePanelHeader = ({ title, releaseDate, duration, coverUrl }) => {
  return (
    <List.Item.Meta
      title={title}
      description={
        <div>
          <CalendarOutlined className="pr1 pl1" />
          {releaseDate}
          <ClockCircleOutlined className="pr1 pl1" />
          {`${duration} min`}
        </div>
      }
      avatar={<Avatar src={coverUrl} alt={title} shape="square" />}
    />
  );
};

export default CollapsePanelHeader;
