import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <SearchContainer>
      <SearchInputContainer>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <SearchInput 
          type="text" 
          placeholder="여행지, 관심있는 장소를 검색해 보세요"
        />
      </SearchInputContainer>
    </SearchContainer>
  );
}

export default SearchBar;

const SearchContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 62px auto 32px auto;
  padding: 0 24px;
`;

const SearchInputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  z-index: 1;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 16px 0 48px;
  border: none;
  border-radius: 24px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  outline: none;
  
  &::placeholder {
    color: #999;
  }
  
  &:focus {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`; 