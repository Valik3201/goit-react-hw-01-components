import styled from 'styled-components';
import { StatisticsSection } from 'components/StatisticsComponent/styles';

export const Table = styled(StatisticsSection).attrs({
  as: 'table',
})`
  color: #24292e;
  text-align: center;
  width: 90%;

  td,
  th {
    border-bottom: 1px solid #d4d9e1;
    padding: 0.5rem;
  }
`;
