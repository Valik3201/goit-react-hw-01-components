import styled from 'styled-components';
import { StatisticsSection } from 'components/StatisticsComponent/styles';

export const List = styled(StatisticsSection)`
  width: 50%;
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #d4d9e1;
  position: relative;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const StatusIndicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'transparent')};
  position: absolute;
  bottom: 18px;
  left: 38px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #d4d9e1;
`;

export const Name = styled.p`
  color: #24292e;
  font-family: monospace;
  font-weight: bold;
  font-size: 1rem;
  padding: 1rem;
`;
