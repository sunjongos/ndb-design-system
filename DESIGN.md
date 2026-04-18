# NDB Design System (Namyangju Baek Hospital)

이 저장소는 **남양주백병원(Namyangju Baek Hospital)** 의 브랜드 가이드라인과 UI 요소를 정의하는 디자인 시스템입니다.
통합적이고 일관된 환자 경험(Patient-friendly UI)을 제공하기 위해 사용됩니다.

## 1. Brand Identity
- **회사명**: 남양주백병원
- **슬로건**: "New, Different and much Better (NDB)"
- **주요 서비스**: 
  - 남양주 지역 대표 척추·관절 전문병원
  - 고난도 척추수술, 척추 내시경 수술, 풍선 경막외 신경성형술(Balloon-PEN)
  - 관절센터, 신경과, 내과 통합 운영 (ERAS 프로그램)
- **톤앤매너**: 
  - 전문적이고 신뢰감 있는 분위기 (Professional & Reliable)
  - 환자 친화적이고 따뜻한 느낌 (Patient-friendly)

## 2. Design Tokens

### 2.1. Colors
디자인 시스템에서 제공하는 메인 컬러 팔레트입니다.

* **Primary Blue** (`#0066CC`):
  * **의미**: 병원의 신뢰성, 안전함, 전문성을 상징
  * **사용처**: 헤더, 메인 버튼, 주요 정보 텍스트, 강한 강조가 필요한 UI 요소
* **Primary Orange** (`#FF6600`):
  * **의미**: 에너지, 활기참, 환자 친화적이고 따뜻한 분위기를 상징
  * **사용처**: 하이라이트 글귀, CTA(Call to Action) 버튼, 포인트 아이콘, 서브 브랜딩 요소

### 2.2. Typography
의료 정보는 가독성과 명확성이 가장 중요합니다.

* **Primary Font Family**: `Pretendard`, `Noto Sans KR`
* **Style**: 깔끔하고 가독성이 뛰어난 산세리프(Sans-Serif) 계열
* **적용**: 본문 텍스트, 제목, 버튼 레이블 등 전체 UI에 일괄 적용

### 2.3. Layout & Components (Guide)
* **모서리(Border Radius)**: 약간의 둥근 모서리(e.g., `rounded-lg`)를 사용하여 부드럽고 친화적인 느낌 제공.
* **여백(Spacing)**: 정보가 빽빽하지 않고 시원하게 읽힐 수 있도록 충분한 여백(Whitespace) 확보.
* **접근성(Accessibility)**: 고령층 환자가 사용할 수 있도록 폰트 크기를 키울 수 있는 여지와 대비(Contrast)를 충분하게 둔다.

## 3. Usage
이 디자인 시스템 플러그인(`tailwind.config.js`)은 남양주백병원과 관련된 모든 웹서비스(홈페이지, CRM 내부 대시보드, 내원 환자용 키오스크 등)에 공통으로 적용됩니다.
