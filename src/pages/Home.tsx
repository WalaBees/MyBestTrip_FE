import  { useState } from "react";
import styled from "styled-components";
import { lightTheme } from "../styles/theme";
import MainCarousel from "../components/homepage/MainCarousel";
import SearchBar from "../components/homepage/SearchBar";
import MbtiDestinationsCarousel from "../components/homepage/MbtiDestinationsCarousel";
import TabNavigation from "../components/homepage/TabNavigation";
import PersonalizedRecommendations from "../components/homepage/PersonalizedRecommendations";
import RegionRecommendations from "../components/homepage/RegionRecommendations";
import ReversalTrip from "../components/homepage/ReversalTrip";
import FloatingModal from "../components/homepage/FloatingModal";

function Home() {
  const [activeTab, setActiveTab] = useState<'mbti' | 'region'>('mbti');
  const [showFloatingModal, setShowFloatingModal] = useState(true);

  const handleReversalTripClick = (category: string) => {
    // TODO: 반전 여행 페이지로 이동하는 로직 구현
    console.log(`반전 여행 카테고리 클릭: ${category}`);
  };

  const handleCloseFloatingModal = () => {
    setShowFloatingModal(false);
  };

  return (
    <Container>
      <MainCarousel />
      <SearchBar />
      <MbtiDestinationsCarousel />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === 'mbti' ? (
        <PersonalizedRecommendations />
      ) : (
        <RegionRecommendations />
      )}
      <ReversalTrip onCategoryClick={handleReversalTripClick} />
      {showFloatingModal && (
        <FloatingModal onClose={handleCloseFloatingModal} />
      )}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: white;
  color: ${lightTheme.colors.primary};
  padding-bottom: 180px;
`;
