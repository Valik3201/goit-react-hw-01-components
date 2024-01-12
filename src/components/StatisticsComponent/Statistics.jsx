import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles.js';

export const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Statistics = ({ title, stats }) => {
  return (
    <Styled.StatisticsSection>
      {title && <Styled.Title>{title}</Styled.Title>}

      <Styled.StatList>
        {stats.map(({ id, label, percentage }) => (
          <Styled.StatItem key={id} color={generateRandomColor()}>
            <Styled.Label>{label}</Styled.Label>
            <Styled.Percentage>{percentage}%</Styled.Percentage>
          </Styled.StatItem>
        ))}
      </Styled.StatList>
    </Styled.StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
