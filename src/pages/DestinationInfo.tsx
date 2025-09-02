import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { lightTheme } from '../styles/theme';
import TravelCard from '../components/mypage/TravelCard';
import TravelListItem from '../components/mypage/TravelListItem';
import { regionDestinations } from '../data/regionDestinations';
import ViewModeToggle from '../components/mypage/ViewModeToggle';
import SortOptions from '../components/mypage/SortOptions';
import SearchIcon from '@mui/icons-material/Search';
import type { SortOrder } from '../types/review';
import type { ViewMode } from '../types/favorite';

const DestinationInfo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortOrder>('newest');

  const itemsPerPage = 8;

  // MBTI 태그들
  const mbtiTags = ['INFP', 'INTP', 'ISFP', 'ISTP', 'INFJ', 'ISFJ', 'ISTJ', 'ESTP', 'ESTJ', 'ENFP', 'ENTP', 'ENFJ', 'ENTJ'];

  // 필터링된 여행지들
  const filteredDestinations = useMemo(() => {
    let filtered = regionDestinations;

    // 검색어로 필터링
    if (searchTerm) {
      filtered = filtered.filter(dest => 
        dest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 선택된 태그로 필터링
    if (selectedTags.length > 0) {
      filtered = filtered.filter(dest => 
        selectedTags.some(tag => dest.tags.includes(tag))
      );
    }

    // 정렬
    if (sortBy === 'oldest') {
      filtered = [...filtered].sort((a, b) => Math.random() - 0.5); // 임시로 랜덤 정렬
    } else {
      filtered = [...filtered].sort((a, b) => Math.random() - 0.5); // 임시로 랜덤 정렬
    }

    return filtered;
  }, [searchTerm, selectedTags, sortBy]);

  // 페이지네이션
  const totalPages = Math.ceil(filteredDestinations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDestinations = filteredDestinations.slice(startIndex, endIndex);

  const handleTagClick = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <HeaderSection>
        <Title>여행지 정보</Title>
        <Subtitle>여행을 원하는 지역을 검색해주세요</Subtitle>
      </HeaderSection>

      <SearchSection>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="검색.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </SearchContainer>
      </SearchSection>

      <TagsSection>
        <TagsContainer>
          {mbtiTags.map((tag) => (
            <TagButton
              key={tag}
              isSelected={selectedTags.includes(tag)}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </TagButton>
          ))}
          <ScrollIndicator>→</ScrollIndicator>
        </TagsContainer>
      </TagsSection>

      <ResultsSection>
        <ResultsInfo>
          <TotalCount>전체 {filteredDestinations.length}건</TotalCount>
          <ControlsContainer>
            <SortOptions currentSort={sortBy} onSortChange={setSortBy} />
            <ViewModeToggle currentMode={viewMode} onModeChange={setViewMode} />
          </ControlsContainer>
        </ResultsInfo>
      </ResultsSection>

      <DestinationsSection>
        {viewMode === 'grid' ? (
          <CardGrid>
            {currentDestinations.map((dest) => (
              <TravelCard
                key={dest.id}
                title={dest.title}
                location={dest.location}
                imageUrl={dest.imageUrl}
                description={dest.description}
                tags={dest.tags}
                rating={5.0}
                reviewCount={1233}
                isFavorite={false}
                onFavoriteClick={() => {}}
              />
            ))}
          </CardGrid>
        ) : (
          <ListContainer>
            {currentDestinations.map((dest) => (
              <TravelListItem
                key={dest.id}
                title={dest.title}
                location={dest.location}
                imageUrl={dest.imageUrl}
                description={dest.description}
                tags={dest.tags}
                rating={5.0}
                reviewCount={1233}
                isFavorite={false}
                onFavoriteClick={() => {}}
              />
            ))}
          </ListContainer>
        )}
      </DestinationsSection>

      <PaginationSection>
        <PaginationContainer>
          <PageButton 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            isArrow={true}
          >
            ‹
          </PageButton>
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const pageNum = i + 1;
            return (
              <PageButton
                key={pageNum}
                isActive={pageNum === currentPage}
                onClick={() => handlePageChange(pageNum)}
                isArrow={false}
              >
                {pageNum}
              </PageButton>
            );
          })}
          <PageButton 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            isArrow={true}
          >
            ›
          </PageButton>
        </PaginationContainer>
      </PaginationSection>
    </Container>
  );
};

export default DestinationInfo;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
  margin-top: 62px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: ${lightTheme.colors.gray.dark};
  margin: 0;
  margin-top: 12px;
`;

const SearchSection = styled.div`
  margin-bottom: 24px;
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 400px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 16px 48px 16px 16px;
  border: 1px solid ${lightTheme.colors.gray.light};
  border-radius: 8px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: ${lightTheme.colors.primary};
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${lightTheme.colors.gray.dark};
`;

const TagsSection = styled.div`
  margin-bottom: 32px;
  overflow: hidden;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 8px 0;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TagButton = styled.button<{ isSelected: boolean }>`
  padding: 8px 16px;
  border: 1px solid ${props => props.isSelected ? lightTheme.colors.primary : lightTheme.colors.gray.light};
  border-radius: 20px;
  background-color: ${props => props.isSelected ? lightTheme.colors.primary : 'white'};
  color: ${props => props.isSelected ? 'white' : '#333'};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.isSelected ? lightTheme.colors.primary : lightTheme.colors.backgroundLight};
  }
`;

const ScrollIndicator = styled.span`
  color: ${lightTheme.colors.gray.dark};
  font-size: 18px;
  margin-left: 8px;
  align-self: center;
`;

const ResultsSection = styled.div`
  margin-bottom: 24px;
  margin-top: 62px;
  // border: 1px solid red;
`;

const ResultsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalCount = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

const ControlsContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const DestinationsSection = styled.div`
  margin-bottom: 32px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PaginationSection = styled.div`
  display: flex;
  justify-content: center;
`;

const PaginationContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;

const PageButton = styled.button<{ isActive?: boolean; disabled?: boolean; isArrow?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.isArrow ? '32px' : '32px'};
  height: 32px;
  padding: ${props => props.isArrow ? '0' : '0'};
  border: none;
  border-radius: ${props => props.isArrow ? '50%' : '6px'};
  background-color: ${props => props.isActive ? '#f5f5f5' : 'white'};
  color: ${props => props.isActive ? '#333' : '#333'};
  font-size: 14px;
  font-weight: ${props => props.isActive ? '500' : '400'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s ease;
  opacity: ${props => props.disabled ? 0.5 : 1};

  &:hover:not(:disabled) {
    background-color: ${props => props.isActive ? '#f0f0f0' : '#f5f5f5'};
    transform: ${props => props.isArrow ? 'scale(1.05)' : 'none'};
  }
`; 