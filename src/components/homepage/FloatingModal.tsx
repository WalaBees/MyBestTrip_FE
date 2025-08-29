import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import trophyIcon from '../../assets/trophy.png';

interface FloatingModalProps {
  onClose: () => void;
}

function FloatingModal({ onClose }: FloatingModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 컴포넌트가 마운트된 후 애니메이션을 위해 약간의 지연 후 표시
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); 
  };

  return (
    <ModalContainer isVisible={isVisible}>
      <ModalContent>
        <CloseButton onClick={handleClose}>×</CloseButton>
        
        <TrophyContainer>
          <TrophyIcon src={trophyIcon} alt="트로피" />
        </TrophyContainer>
        
        <ModalText>
          <MainText>여행지 밸런스 게임 참여하기</MainText>
          <SubText>클릭하여 페이지 이동 &gt;</SubText>
        </ModalText>
      </ModalContent>
    </ModalContainer>
  );
}

export default FloatingModal;

const ModalContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  right: 24px;
  top: 80%;
  transform: translateY(-50%);
  z-index: 1000;
  transition: all 0.3s ease;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: translateY(-50%) ${props => props.isVisible ? 'translateX(0)' : 'translateX(100%)'};
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px 12px 24px 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  min-width: 280px;
  position: relative;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 20px;
  color: #999;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f5f5f5;
    color: #666;
  }
`;

const TrophyContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

const TrophyIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 32px;
`;

const ModalText = styled.div`
  text-align: center;
  margin-top: 16px;
`;

const MainText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.4;
`;

const SubText = styled.div`
  font-size: 14px;
  color: #666;
  line-height: 1.3;
  cursor: pointer;
  margin-top: 12px;
  padding-bottom: 12px;
`; 