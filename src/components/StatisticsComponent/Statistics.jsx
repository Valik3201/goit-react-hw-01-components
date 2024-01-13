import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles.js';

/**
 * Generates a random color in hexadecimal format.
 * @function
 * @returns {string} - A randomly generated color in hexadecimal format.
 */
export const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

/**
 * Statistics component displays a section of statistical information with a title and a list of stats.
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the statistics section (optional).
 * @param {Array} props.stats - An array of statistical data objects.
 * @param {string} props.stats.id - The unique identifier for each statistical data.
 * @param {string} props.stats.label - The label or description of the statistical data.
 * @param {number} props.stats.percentage - The percentage value of the statistical data.
 * @returns {JSX.Element} - The rendered Statistics component.
 */
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

/**
 * Prop types for the Statistics component.
 * @type {Object}
 * @property {string} title - The title of the statistics section (optional).
 * @property {Array} stats - An array of statistical data objects.
 * @property {string} stats.id - The unique identifier for each statistical data.
 * @property {string} stats.label - The label or description of the statistical data.
 * @property {number} stats.percentage - The percentage value of the statistical data.
 */
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
