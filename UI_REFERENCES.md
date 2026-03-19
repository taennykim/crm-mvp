# UI References

## 1. Purpose

- 보험 CS용 AI Agent CRM MVP에 참고할 UI 레퍼런스를 기록한다.
- 조사한 화면에서 공통 패턴을 정리하고 MVP 반영 여부를 판단한다.

## 2. Reference List

### Reference 1

- Product: Salesforce Service Cloud
- Screen: Service Agent Console
- Source: https://www.salesforce.com/products/service-cloud/features/service-agent-console/
- Notes:
  - 공식 페이지에서 상담원이 하나의 통합 워크스페이스에서 고객 이슈를 처리하는 방향을 강조한다.
  - 핵심 패턴은 단일 콘솔, 빠른 케이스 처리, AI 기반 추천이다.
  - MVP에 반영할 요소는 `업무용 패널 구조`, `상담 흐름 중심 레이아웃`, `한 화면에서 작업 수행`이다.

### Reference 2

- Product: Salesforce Financial Services Cloud
- Screen: CSR Console for Service
- Source: https://www.salesforce.com/financial-services/service-pricing/
- Notes:
  - 공식 페이지에서 금융 서비스용 `CSR Console`과 `Single Pane of Glass`를 명시한다.
  - 보험 CRM 문맥에서는 고객 응대와 서비스 처리를 한 화면에 모으는 구조가 중요하다.
  - MVP에 반영할 요소는 `보험 CS용 단일 화면`, `불필요한 영역 제거`, `상담 이력 중심 정보 배치`다.

### Reference 3

- Product: Salesforce Financial Services Cloud
- Screen: Financial Services Cloud Overview
- Source: https://www.salesforce.com/ap/products/financial-services-cloud/overview/
- Notes:
  - 서비스 기능 설명에서 `Easy to Use CSR Console for Single Pane of Glass`를 다시 강조한다.
  - 금융 도메인에서는 복잡한 일반 CRM보다 도메인 맞춤형 콘솔 구조가 중요하다는 점을 확인할 수 있다.
  - MVP에서는 보험 CS 시나리오에 맞는 최소 요소만 유지하는 방향이 적합하다.

### Reference 4

- Product: Salesforce Einstein Copilot
- Screen: Einstein Copilot GA Announcement
- Source: https://www.salesforce.com/news/press-releases/2024/04/25/einstein-copilot-general-availability/
- Notes:
  - 공식 발표에서 페이지 맥락에 맞는 `Recommended Actions`와 대화형 AI 지원을 설명한다.
  - 이는 AI가 별도 시스템이 아니라 현재 화면의 작업 흐름 안에서 제안하는 형태임을 보여준다.
  - MVP에 반영할 요소는 `질문 기반 답변 생성`, `현재 상담 맥락에 맞는 응답`, `버튼형 후속 액션`이다.

### Reference 5

- Product: Salesforce AI Platform / Agentforce for Service
- Screen: Service Cloud Overview
- Source: https://www.salesforce.com/products/platform/products/mysalesforce/
- Notes:
  - 공식 페이지에서 실시간 인사이트와 스마트 제안을 통해 상담원이 더 빨리 해결하도록 돕는 구조를 설명한다.
  - 여기서 중요한 UI 방향은 AI를 메인 기능이 아니라 상담원 보조 패널로 두는 것이다.
  - MVP에 반영할 요소는 `우측 AI 패널`, `추천 답변`, `참고 정보 영역`이다.

## 3. Common Patterns

- 단일 콘솔형 화면에서 상담원이 이력 확인과 응답 작성을 함께 수행한다.
- AI는 별도 독립 앱이 아니라 현재 서비스 화면 안의 보조 패널 또는 추천 영역으로 배치된다.
- 금융 서비스 문맥에서는 `Single Pane of Glass`가 반복적으로 강조되며, 화면 분산보다 집중형 레이아웃이 선호된다.
- 추천 답변이나 액션은 현재 보고 있는 고객/상담 맥락과 연결되어야 한다.
- 업무용 UI는 화려한 장식보다 패널, 카드, 상태, 액션 버튼 중심의 구조를 가진다.

## 4. Elements To Use In MVP

- 상담 이력 중심 구조
- 질문 입력창
- AI 답변 패널
- 답변 재생성 또는 복사 버튼
- 상담 흐름을 방해하지 않는 우측 보조 패널

## 5. Elements To Exclude From MVP

- 고객 목록
- 고객 상세 프로필
- 복잡한 업무 탭
- 고급 자동화 워크플로우
- 다중 패널 CRM 탐색 구조
- 고급 분석 대시보드

## 6. Final UI Direction

- 단일 화면
- 중앙에 상담 이력, 하단에 질문 입력
- 우측에 AI 답변 패널
- Salesforce 계열의 밝고 정돈된 업무용 톤
- 보험 CS 문맥이 드러나는 간단한 레이아웃
- AI는 메인 주체가 아니라 CS 상담원을 보조하는 역할로 표현

## 7. MVP Layout Draft

- Header: 서비스명, 현재 상담 상태
- Main Center: 상담 이력 타임라인
- Bottom Input: 고객 질문 입력창과 전송 버튼
- Right Panel: AI 답변, 참고 정보, 후속 액션 버튼

이 구조는 Salesforce 공식 자료에서 확인되는 `통합 콘솔`과 `작업 흐름 안의 AI` 패턴을 MVP 수준으로 단순화한 결과다.

## 8. Source Notes

- Salesforce Service Cloud 공식 페이지는 상담원을 위한 통합 콘솔과 AI 추천 흐름을 강조한다.
- Salesforce Financial Services Cloud 공식 페이지는 금융 서비스용 CSR Console과 Single Pane of Glass 개념을 강조한다.
- Einstein Copilot 공식 발표는 현재 페이지 맥락에 맞는 Recommended Actions를 제시한다.

위 항목 중 일부는 공식 제품 설명을 바탕으로 한 UI 방향 추론이다.

## 9. Next Action

1. 레퍼런스 화면을 수집한다.
2. 공통 패턴을 정리한다.
3. MVP 반영 요소를 확정한다.
4. 화면 와이어프레임 초안을 만든다.
