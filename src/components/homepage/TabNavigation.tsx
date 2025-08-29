import React from 'react';
import styled from 'styled-components';

interface TabNavigationProps {
  activeTab: 'mbti' | 'region';
  onTabChange: (tab: 'mbti' | 'region') => void;
}

function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <Container>
      <TabBar>
        <Tab 
          active={activeTab === 'mbti'} 
          onClick={() => onTabChange('mbti')}
        >
          나의 MBTI 여행추천
        </Tab>
        <Divider />
        <Tab 
          active={activeTab === 'region'} 
          onClick={() => onTabChange('region')}
        >
          지역특화인기 여행지
        </Tab>
      </TabBar>
    </Container>
  );
}

export default TabNavigation;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 62px auto 42px auto;
  padding: 0 24px;
`;

const TabBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #e9ecef;
  border-radius: 8px;
  padding: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 12px 24px;
  border: none;
  background-color: ${props => props.active ? '#007bff' : 'transparent'};
  color: ${props => props.active ? 'white' : '#495057'};
  font-size: 14px;
  font-weight: ${props => props.active ? '600' : '500'};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#0056b3' : 'rgba(0, 123, 255, 0.1)'};
    color: ${props => props.active ? 'white' : '#007bff'};
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 24px;
  background-color: #adb5bd;
  margin: 0 8px;
`; 