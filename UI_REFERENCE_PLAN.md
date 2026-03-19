# UI Reference Plan

## 1. Objective

- 보험 CS용 AI Agent CRM MVP의 UI 레퍼런스를 조사하고 정리한다.
- 범용 금융 CRM과 CS용 AI Agent 화면에서 공통적으로 쓰이는 패턴을 추린다.
- 최종적으로 단순한 MVP 화면 구조를 결정한다.

## 2. MVP UI Goal

- 상담 이력을 중심으로 한 단일 화면
- 질문 입력창과 AI 답변창이 명확히 구분된 구조
- 복잡한 CRM 기능 없이도 업무용 화면처럼 보이는 UI
- Salesforce 계열의 업무용 UI 톤 참고

## 3. Reference Scope

### Primary References

- Salesforce Service Console
- Salesforce Einstein Copilot UI
- Salesforce Financial Services Cloud

### Secondary References

- Zendesk Agent Workspace
- Dynamics 365 Customer Service
- ServiceNow CSM
- Intercom AI Agent / Copilot style panels

## 4. What To Check

레퍼런스를 볼 때 아래 항목을 우선 확인한다.

- 상담 이력이 어떤 구조로 배치되는지
- 질문 입력창이 어느 위치에 놓이는지
- AI 패널이 우측인지 하단인지
- AI 답변이 카드형인지 채팅형인지
- 추천 답변과 참고 근거가 어떻게 보이는지
- 업무 툴 느낌을 주는 색상, 간격, 패널 구조가 어떤지

## 5. Target Layout

현재 MVP의 목표 레이아웃은 아래와 같다.

- 상단: 간단한 헤더
- 중앙 메인: 상담 이력
- 하단 입력: 질문 입력창
- 우측 패널 또는 하단 우측: AI 답변창

## 6. Output

이 문서를 바탕으로 아래 산출물을 만든다.

- 레퍼런스 화면 목록
- 화면 패턴 요약
- MVP 반영 요소
- 제외 요소
- 최종 화면 구조안

## 7. Decision Rules

- MVP에서 바로 구현 가능한 패턴만 채택한다.
- 고객 목록, 고객 상세 등은 현재 범위에서 제외한다.
- 시연 시 바로 이해되는 단순한 구조를 우선한다.
- UI는 화려함보다 업무 가독성을 우선한다.

## 8. Next Step

1. 참고할 CRM/CS AI Agent 화면을 수집한다.
2. 공통 패턴을 5개 이내로 정리한다.
3. MVP에 반영할 최소 요소를 결정한다.
4. 화면 와이어프레임 초안으로 연결한다.
