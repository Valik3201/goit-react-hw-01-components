import styled from 'styled-components';
import { StatisticsSection } from 'components/StatisticsComponent/styles';

export const Table = styled(StatisticsSection)`
  color: #24292e;
  text-align: center;
  width: 90%;

  th {
    width: 200px;
  }

  td,
  th {
    border-bottom: 1px solid #d4d9e1;
    padding: 0.5rem;
  }
`;