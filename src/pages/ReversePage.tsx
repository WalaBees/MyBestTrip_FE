import React, { useEffect, useRef } from 'react';

// SVG Icons
const MoreHorizontalIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="19" cy="12" r="1"></circle>
    <circle cx="5" cy="12" r="1"></circle>
  </svg>
);

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg className={`w-3 h-3 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const Share2Icon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
  </svg>
);

const CopyIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const HeartIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

interface LocationItem {
  name: string;
  rating: number;
  reviewCount: number;
  description: string;
  category: string;
  distance?: string;
  image: string;
}

interface ReviewItem {
  author: string;
  content: string;
  date: string;
}

const App = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Load Leaflet dynamically
    const loadMap = async () => {
      if (!mapRef.current) return;

      // Check if Leaflet is already loaded
      if ((window as any).L) {
        initMap();
        return;
      }

      // Load Leaflet CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
      document.head.appendChild(link);

      // Load Leaflet JS
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
      script.onload = () => {
        initMap();
      };
      document.body.appendChild(script);
    };

    const initMap = () => {
      const L = (window as any).L;
      if (!L || !mapRef.current) return;
      
      // Initialize map centered on Bukhansan (북한산)
      const map = L.map(mapRef.current).setView([37.6583, 126.9778], 12);
      mapInstanceRef.current = map;

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Add markers for Bukhansan locations
      const locations = [
        { name: '북한산 백운대', lat: 37.6583, lng: 126.9778 },
        { name: '북한산성', lat: 37.6489, lng: 126.9667 },
        { name: '북한산 국립공원', lat: 37.6500, lng: 126.9800 },
        { name: '인수봉', lat: 37.6522, lng: 126.9744 },
        { name: '만경대', lat: 37.6556, lng: 126.9833 }
      ];

      locations.forEach(location => {
        const marker = L.marker([location.lat, location.lng]).addTo(map);
        marker.bindPopup(`<b>${location.name}</b>`);
      });

      // Trigger resize after a short delay to ensure proper rendering
      setTimeout(() => {
        map.invalidateSize();
      }, 100);
    };

    loadMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const locations: LocationItem[] = [
    {
      name: "북한산",
      rating: 4.5,
      reviewCount: 8847,
      description: "서울 대표 명산으로 울창한 숲과 바위능선으로 이루어진 산",
      category: "산",
      distance: "30분 거리",
      image: "/api/placeholder/60/60"
    },
    {
      name: "북한산성",
      rating: 4.5,
      reviewCount: 862,
      description: "조선시대 한양을 지키던 성곽 유적지로 역사적 의미가 깊은 곳",
      category: "역사유적",
      image: "/api/placeholder/60/60"
    },
    {
      name: "북한산 국립공원",
      rating: 4.5,
      reviewCount: 8,
      description: "국립공원 / 대한민국 최초 국립공원",
      category: "국립공원",
      image: "/api/placeholder/60/60"
    },
    {
      name: "북한산국립공원",
      rating: 4.6,
      reviewCount: 2218,
      description: "국립공원 / 백운대 2차선 산행길이 인기 좋은 국립공원으로 많은 시민들이 찾는 곳",
      category: "국립공원",
      image: "/api/placeholder/60/60"
    },
    {
      name: "북한산 백운대",
      rating: 4.6,
      reviewCount: 1494,
      description: "명산 / 북한산 최고봉 백운대 해발 836m",
      category: "산봉우리",
      image: "/api/placeholder/60/60"
    },
    {
      name: "북한산",
      rating: 4.5,
      reviewCount: 2,
      description: "산",
      category: "산",
      image: "/api/placeholder/60/60"
    }
  ];

  const reviews: ReviewItem[] = [
    {
      author: "김등산",
      content: "백운대까지 올라가는 길이 험하지만 정상에서 보는 경치가 정말 멋져요!",
      date: "2024-09-15"
    },
    {
      author: "자연사랑", 
      content: "인수봉 바위길이 스릴 넘치고 재미있었습니다. 안전장비 필수예요.",
      date: "2024-09-10"
    },
    {
      author: "서울이",
      content: "우이동 코스로 올라갔는데 초보자도 무난하게 오를 수 있어요.", 
      date: "2024-09-08"
    }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-80 bg-white shadow-lg overflow-y-auto">
        {/* Location List */}
        <div className="p-4">
          {locations.map((location, index) => (
            <div key={index} className="flex gap-3 mb-4 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">{location.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} filled={i < Math.floor(location.rating)} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">({location.reviewCount})</span>
                </div>
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">{location.description}</p>
                {location.distance && (
                  <div className="flex items-center gap-1 mt-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-blue-600">{location.distance}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Map Area */}
        <div className="flex-1 relative">
          {/* Real map container */}
          <div 
            ref={mapRef}
            className="w-full h-full"
            style={{ minHeight: '400px' }}
          ></div>
          
          {/* Map controls overlay */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 z-[1000]">
            <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50">
              <MoreHorizontalIcon />
            </button>
            <div className="flex flex-col bg-white rounded-lg shadow-md">
              <button 
                onClick={() => {
                  if (mapInstanceRef.current) {
                    mapInstanceRef.current.zoomIn();
                  }
                }}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 text-lg font-bold"
              >
                +
              </button>
              <div className="w-full h-px bg-gray-200"></div>
              <button 
                onClick={() => {
                  if (mapInstanceRef.current) {
                    mapInstanceRef.current.zoomOut();
                  }
                }}
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 text-lg font-bold"
              >
                −
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-white border-t">
          {/* Title */}
          <div className="p-6">
            <h1 className="text-2xl font-bold text-center mb-8">강원도 북한산</h1>
            
            {/* Details Section */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">상세정보</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• 위치: 서울특별시 종로구, 성북구, 은평구 일대</p>
                  <p>• 최고봉: 백운대 (836.5m)</p>
                  <p>• 주요 봉우리: 백운대, 인수봉, 만경대</p>
                  <p>• 면적: 79.92km²</p>
                  <p>• 등반 코스: 우이동, 정릉, 구기동 코스 등</p>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"># 등산</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"># 자연</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"># 힐링</span>
              </div>
            </div>

            {/* Reviews Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4">리뷰</h2>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-sm text-gray-600">👤</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">{review.author}</span>
                        <span className="text-gray-600 ml-3">{review.content}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">{review.date}</span>
                      <div className="flex gap-1">
                        <div className="text-gray-400 hover:text-gray-600 cursor-pointer">
                          <Share2Icon />
                        </div>
                        <div className="text-gray-400 hover:text-gray-600 cursor-pointer">
                          <CopyIcon />
                        </div>
                        <div className="text-gray-400 hover:text-red-500 cursor-pointer">
                          <HeartIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;