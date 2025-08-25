import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from '../components/mypage/Sidebar';
import ProfilePage from './mypage/ProfilePage';
import FavoritesPage from './mypage/FavoritesPage';
import ReviewsPage from './mypage/ReviewsPage';
import TripsPage from './mypage/TripsPage';
import InquiryPage from './mypage/InquiryPage';

const MyPage: React.FC = () => {
  return (
    <MyPageContainer>
      <Sidebar />
      <ContentArea>
        <Routes>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="trips" element={<TripsPage />} />
          <Route path="inquiry" element={<InquiryPage />} />
          <Route path="" element={<Navigate to="profile" replace />} />
        </Routes>
      </ContentArea>
    </MyPageContainer>
  );
};

const MyPageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #ffffff;
`;

const ContentArea = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: #ffffff;
`;

export default MyPage;
