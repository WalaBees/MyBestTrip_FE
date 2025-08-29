import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function MainCarousel() {
  const carouselImages = [
    'https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1523496922380-91d5afba98a3?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&h=400&fit=crop'
  ];

  return (
    <Wrapper>
      <Carousel data-bs-theme="dark">
        {carouselImages.map((image, index) => (
          <Carousel.Item key={index}>
            <Img src={image} alt={`carousel-${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Wrapper>
  );
}

export default MainCarousel;

const Wrapper = styled.div`
  width: 100%;
  height: 460px;
  margin-bottom: 24px;
  
  /* 화살표 스타일링 */
  .carousel-control-prev,
  .carousel-control-next {
    width: 50px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .carousel-control-prev {
    left: 20px;
  }
  
  .carousel-control-next {
    right: 20px;
  }
  
  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    filter: invert(1);
    width: 24px;
    height: 24px;
  }
  
  /* 인디케이터 스타일링 */
  .carousel-indicators {
    bottom: 20px;
  }
  
  .carousel-indicators [data-bs-target] {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.8);
    background-color: transparent;
    margin: 0 4px;
  }
  
  .carousel-indicators .active {
    background-color: white;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 460px;
  object-fit: cover;
`;