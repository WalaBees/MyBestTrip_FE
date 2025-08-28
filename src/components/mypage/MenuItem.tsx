import React from 'react';
import styled from 'styled-components';
import { lightTheme } from '../../styles/theme';

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <MenuItemContainer isActive={isActive} onClick={onClick}>
      <Icon>{icon}</Icon>
      <Label>{label}</Label>
    </MenuItemContainer>
  );
};

export default MenuItem; 

const MenuItemContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${props => props.isActive ? lightTheme.colors.backgroundLight : 'transparent'};
  color: ${props => props.isActive ? '#333' : lightTheme.colors.gray.dark};
  font-weight: ${props => props.isActive ? '500' : '400'};

  &:hover {
    background-color: ${props => props.isActive ? lightTheme.colors.gray.light : '#f9f9f9'};
  }
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: ${lightTheme.colors.gray.light};
  border-radius: 50%;
  font-size: 1rem;

  svg {
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
  }

  img {
    width: 1rem;
    height: 1rem;
  }
`;

const Label = styled.span`
  font-size: 0.875rem;
`;

