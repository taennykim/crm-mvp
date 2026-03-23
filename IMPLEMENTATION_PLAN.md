# Implementation Plan

## 1. Objective

- 보험 CS용 AI Agent CRM MVP를 실제 구현 단계로 옮기기 위한 작업 순서를 정리한다.
- UI, backend proxy, Gemini API 연동을 최소 범위로 구현한다.

## 2. MVP Build Scope

### Frontend

- 상담 이력 표시
- 질문 입력창
- 답변 출력 영역
- 로딩 상태
- 에러 상태

### Backend

- 질문 입력 수신
- Gemini API 호출
- 응답 JSON 반환
- 기본 에러 처리

## 3. Recommended Build Order

### Step 1. Frontend Skeleton

- 단일 화면 레이아웃 구현
- 상담 이력 더미 데이터 표시
- 질문 입력 UI 구현
- 답변 패널 UI 구현

### Step 2. Backend Proxy Skeleton

- 최소 서버 엔드포인트 생성
- `POST /api/ask` 같은 단일 엔드포인트 정의
- JSON request/response 구조 확정

### Step 3. Gemini API Connection

- `.env` 에 API key 연결
- backend proxy에서 Gemini API 호출
- 응답을 MVP 출력 형식으로 정리

### Step 4. Frontend-Backend Wiring

- 질문 입력 시 backend 호출
- 응답 결과 표시
- 로딩/에러 상태 연결

### Step 5. Domain Tuning

- 보험 CS 질문 샘플 반영
- 답변 문구 톤 정리
- 참고 문구 또는 note 추가

### Step 6. Demo Check

- 질문 입력 -> 답변 출력 흐름 검증
- 3분 시연 가능한지 확인
- 불필요한 요소 제거

## 4. API Contract

### Request

```json
{
  "question": "실손보험 청구하려면 어떤 서류가 필요한가요?"
}
```

### Response

```json
{
  "question": "실손보험 청구하려면 어떤 서류가 필요한가요?",
  "answer": "실손보험 청구 시 일반적으로 보험금 청구서와 진료비 관련 서류가 필요합니다.",
  "note": "상품과 사고 유형에 따라 제출 서류가 달라질 수 있습니다.",
  "source": "Gemini API"
}
```

## 5. Frontend Components

- `Header`
- `ConsultationHistory`
- `QuestionInput`
- `AnswerPanel`
- `StatusMessage`

## 6. Backend Responsibilities

- request validation
- Gemini API request construction
- response normalization
- fallback error response

## 7. File/Module Direction

- `frontend`: UI and fetch logic
- `backend`: API proxy and env handling
- `.env`: Gemini API key

## 8. Approval Dependencies

- Gemini API access
- `.env` key handling
- package installation if needed

## 9. Immediate Next Step

1. 프론트엔드 구현 방식 확정
2. 백엔드 프록시 최소 구조 확정
3. 실제 코드 구현 시작
