/* =========================================================
   우리가 만든 가이드 — 설정 파일 (데이터)
   - firebase.apiKey / kakaoJsKey 가 'YOUR_'로 시작하면 데모 모드로 동작합니다.
   - 데모 모드: 데이터는 이 기기 브라우저에만 저장되고, 검색은 예시 결과를 보여줍니다.
   ========================================================= */
window.GUIDE_CONFIG = {
  appTitle: '우리가 만든 가이드',
  subtitle: '친구들이 직접 조사한 소풍지 맛집·놀거리',

  // Firebase 콘솔 > 프로젝트 설정 > 내 앱(웹) 에서 복사
  firebase: {
    apiKey: 'AIzaSyAJYKIYl_u8yVS-IA_8eTe63omNqY8yugs',
    authDomain: 'picnic-6b04e.firebaseapp.com',
    projectId: 'picnic-6b04e',
    storageBucket: 'picnic-6b04e.firebasestorage.app',
    messagingSenderId: '749724557769',
    appId: '1:749724557769:web:630ccb562639ccc8f14818'
  },

  // Kakao Developers > 내 애플리케이션 > 앱 키 > JavaScript 키
  kakaoJsKey: '41ac87bf9ec9be157575c79cefd76068',

  // 학생 Google 계정 도메인 (firestore.rules 의 schoolUser() 도 같은 값으로 수정)
  allowedDomain: 'sungil-i.kr',

  // 학년·반 범위 (firestore.rules 의 validClass() 정규식과 맞춰야 합니다)
  grades: 3,
  classesPerGrade: 12,

  // 소풍지 주변 검색 반경 선택지(m)와 기본값 (firestore.rules 의 trips 규칙과 일치)
  tripRadiusOptions: [1000, 2000, 3000, 5000],
  defaultTripRadius: 2000,

  // 카테고리 id는 firestore.rules 의 validCategory() 와 일치해야 합니다.
  categories: [
    { id: 'food', label: '밥집', emoji: '🍚' },
    { id: 'cafe', label: '카페·디저트', emoji: '🧁' },
    { id: 'play', label: '놀거리', emoji: '🎮' },
    { id: 'spot', label: '명소·포토존', emoji: '📸' }
  ],

  // 가격대 id는 firestore.rules 의 validPrice() 와 일치해야 합니다.
  prices: [
    { id: 'low', label: '~8천원' },
    { id: 'mid', label: '~1.5만원' },
    { id: 'high', label: '1.5만원+' }
  ],

  tags: ['가성비', '양 많음', '단체 가능', '포장 가능', '사진 맛집', '대기 짧음', '조용해요', '친절해요'],

  // 신고가 이 수 이상 쌓이면 학생 화면에서 자동으로 가려집니다.
  reportHideThreshold: 3,

  // 목록을 이 시간(분) 동안 기기에 캐시해서 Firestore 읽기 횟수를 줄입니다.
  listCacheMinutes: 5
};
