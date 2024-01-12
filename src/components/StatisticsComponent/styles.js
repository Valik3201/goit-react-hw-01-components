import styled from 'styled-components';
import { generateRandomColor } from './Statistics';

export const StatisticsSection = styled.section`
  background-color: #f4f4f4;
  padding: 2rem;
  border: 1px solid #d4d9e1;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 16px 32px -16px rgba(0, 0, 0, 0.1), 0 0 0 rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #24292e;
`;

export const StatList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const StatItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0.25rem;
  background-color: ${({ color }) => color || generateRandomColor()};
  margin-bottom: 0.5rem;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Percentage = styled.span`
  font-weight: bold;
`;
