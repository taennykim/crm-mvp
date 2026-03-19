# LLM Plan

## 1. Objective

- 보험 CS용 AI Agent CRM MVP에 들어갈 질문/답변 흐름을 정의한다.
- MVP 단계에서는 단순하고 안정적인 응답 구조를 우선한다.

## 2. Principles

- 먼저 단순하게 시작
- UI 흐름 검증 우선
- 보험 CS 문맥 반영
- 실제 연동 전 Mock 가능
- 외부 접근이나 권한 확장은 최소화

## 3. Scope

### Included

- 질문 입력 포맷 정의
- 답변 출력 구조 정의
- 보험 상담용 기본 프롬프트 방향 정리
- Mock 응답 또는 실제 LLM 연동 방향 결정

### Excluded

- 고도화된 RAG
- 복잡한 히스토리 메모리
- 다중 에이전트 구조
- 모델 튜닝

## 4. Step-by-Step Plan

### Step 1. Interaction Design

- 상담원이 입력하는 질문 형식 정의
- 답변창에 보여줄 항목 정의
- 필요 시 참고 근거 또는 주의 문구 포함 여부 결정

### Step 2. MVP Response Model

- 최소 응답 구조 정의
- 예:
  - question
  - answer
  - note

### Step 3. Mock or Real API Decision

- 초기 단계에서는 Mock 응답으로 시작 가능한지 판단
- 실제 API가 필요하면 승인 범위와 네트워크 조건 확인

### Step 4. Prompt Direction

- 보험 상담용 기본 프롬프트 방향 정의
- 답변 톤은 명확하고 단정하게 유지
- 과도한 법률적 확답은 피하도록 설계

### Step 5. Integration

- UI 질문 입력과 연결
- 응답 결과를 답변창에 표시
- 실패 시 기본 오류 메시지 표시

## 5. Approval Required

- 외부 LLM API 호출
- API Key 사용
- 관련 환경 변수 설정
- 네트워크 접근 허용

## 6. Checklist

- 질문 입력 구조 정의
- 답변 구조 정의
- Mock/실연동 결정
- 프롬프트 방향 정리
- 승인 필요 여부 확인

## 7. Next Step

1. MVP 응답 구조를 확정한다.
2. Mock으로 시작할지 실제 API를 붙일지 정한다.
3. 보험 CS용 샘플 질문과 답변 세트를 만든다.
