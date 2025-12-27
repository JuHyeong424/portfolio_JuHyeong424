export interface Projects {
  id: string;
  name: string;
  day: string;
  type: string;
  explain: string;
  function: string[];
  tech: string[];
  url: string;
}

export const projects = [
  {
    id: "반려견 산책 경로 추천 및 기록 서비스",
    name: "반려견 산책 경로 추천 및 기록 서비스",
    day: "2025.09 ~ 2025.11",
    type: "팀 프로젝트",
    explain: "사용자의 현재 위치를 기반으로 현재 다니고 있는 반려견 산책길이 해당 반려견에게 적합한지 알려주는 웹 애플리케이션",
    function: [
      "Kakao Maps API 기반 실시간 위치 추적 및 Polyline 경로 시각화로 사용자가 산책 루트를 직관적으로 파악할 수 있는 지도 기능 구현",
      "Geolib을 활용해 좌표 오차를 보정하고 정확한 산책 거리 계산 로직을 구현하여 서비스 신뢰도 향상",
      "경로·날씨 데이터 호출을 비동기 처리로 분리해 지도 렌더링 성능과 사용자 체감 반응성 개선",
      "TanStack Query와 Zustand를 조합해 서버·클라이언트 상태를 효율적으로 관리하고, 타입 안정성을 고려한 라우팅 구조 설계",
      "Framer Motion 기반 인터랙션과 Sentry, Husky 도입으로 UX 완성도와 서비스 안정성, 협업 품질을 동시에 강화"
    ],
    tech: ["React", "TypeScript", "TanStack Query", "TanStack Router", "Zustand", "Sentry", "Framer Motion", "Husky", "Tailwind CSS"],
    url: "https://github.com/JuHyeong424/KakaoTechCampus_Team22_FE",
  },
  {
    id: "카카오 선물하기 클론 프로젝트",
    name: "카카오 선물하기 클론 프로젝트",
    day: "2025.07 ~ 2025.08",
    type: "개인 프로젝트",
    explain: "카카오 선물하기 서비스의 핵심 기능을 클론 코딩한 프로젝트",
    function: [
      "Axios와 TanStack Query를 활용해 상품 목록 데이터를 비동기로 관리하고, Loading·Error·Success 상태를 분리하여 안정적인 목록 UI 구현",
      "MSW(Mock Service Worker)를 도입해 API 모킹 환경을 구축하고, 백엔드 의존성 없이 독립적인 기능 개발 및 테스트 진행",
      "카카오 API를 연동한 주문·결제 플로우를 설계하고, 선택 상품 정보를 안전하게 전달하는 결제 로직 구현",
      "Context API로 로그인 및 사용자 세션 상태를 전역 관리하여 Prop Drilling을 방지하고 애플리케이션 구조 단순화",
      "React Hook Form과 Vitest, React Testing Library를 적용해 폼 렌더링 성능과 주요 기능의 안정성을 동시에 확보"
    ],
    tech: ["React", "TypeScript", "TanStack Query", " Styled-components", "Axios", "React-Hook-Form", "Axios", "MSW", "Vitest", "Emotion", " React Toastify"],
    url: "https://github.com/JuHyeong424/react-gift-product-detail-kakao",
  }
]
