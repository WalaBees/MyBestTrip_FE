import React from 'react';
import styled from 'styled-components';

interface TagBadgeProps {
  label: string;
}

const TagBadge: React.FC<TagBadgeProps> = ({ label }) => {
  return <BadgeContainer>{label}</BadgeContainer>;
};

export default TagBadge; 

const BadgeContainer = styled.span`
  background-color: #f0f0f0;
  color: #666;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
`;
