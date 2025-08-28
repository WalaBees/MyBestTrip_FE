import React from 'react';
import styled from 'styled-components';
import type { SortOrder } from '../../types/review';
import { lightTheme } from '../../styles/theme';

interface SortOptionsProps {
  currentSort: SortOrder;
  onSortChange: (sort: SortOrder) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({ currentSort, onSortChange }) => {
  return (
    <SortContainer>
      <SortButton
        isActive={currentSort === 'newest'}
        onClick={() => onSortChange('newest')}
      >
        최신순
      </SortButton>
      <SortButton
        isActive={currentSort === 'oldest'}
        onClick={() => onSortChange('oldest')}
      >
        오래된순
      </SortButton>
    </SortContainer>
  );
};

export default SortOptions; 

const SortContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const SortButton = styled.button<{ isActive: boolean }>`
  padding: 8px 16px;
  border: 1px solid ${props => props.isActive ? lightTheme.colors.gray.light : lightTheme.colors.border};
  border-radius: 6px;
  background-color: ${props => props.isActive ? lightTheme.colors.gray.light : 'white'};
  color: ${props => props.isActive ? '#333' : lightTheme.colors.gray.dark};
  font-size: 14px;
  font-weight: ${props => props.isActive ? '500' : '400'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.isActive ? lightTheme.colors.gray.light : lightTheme.colors.backgroundLight};
  }
`;

