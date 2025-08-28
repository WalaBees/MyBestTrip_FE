import React from 'react';
import styled from 'styled-components';
import type { ViewMode } from '../../types/favorite';
import { lightTheme } from '../../styles/theme';

interface ViewModeToggleProps {
  currentMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

const ViewModeToggle: React.FC<ViewModeToggleProps> = ({ currentMode, onModeChange }) => {
  return (
    <ToggleContainer>
      <ToggleButton
        isActive={currentMode === 'list'}
        onClick={() => onModeChange('list')}
      >
        <ListIcon>☰</ListIcon>
      </ToggleButton>
      <ToggleButton
        isActive={currentMode === 'grid'}
        onClick={() => onModeChange('grid')}
      >
        <GridIcon>⊞</GridIcon>
      </ToggleButton>
    </ToggleContainer>
  );
};

export default ViewModeToggle; 

const ToggleContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const ToggleButton = styled.button<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid ${props => props.isActive ? lightTheme.colors.gray.light : lightTheme.colors.border};
  border-radius: 6px;
  background-color: ${props => props.isActive ? lightTheme.colors.gray.light : 'white'};
  color: ${props => props.isActive ? '#333' : lightTheme.colors.gray.dark};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.isActive ? lightTheme.colors.gray.light : lightTheme.colors.backgroundLight};
  }
`;

const ListIcon = styled.span`
  font-size: 20px;
`;

const GridIcon = styled.span`
  font-size: 20px;
`;

