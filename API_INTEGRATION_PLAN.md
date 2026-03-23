# API Integration Plan

## 1. Objective

- 보험 CS용 AI Agent CRM MVP에서 실제 LLM API를 연결하는 방식을 정리한다.
- MVP 수준에서 가장 단순하고 안전한 연결 구조를 선택한다.

## 2. Current Direction

- API provider: `Google Gemini API`
- MVP priority: 실제 질문/답변 흐름 연결
- scope: 보험 상담 질문에 대한 답변 생성

## 3. Recommended Integration Shape

### Provider

- `Google Gemini API`

### API Key Storage

- 1차 권장: `.env`
- 이유:
  - MVP에서 가장 빠르게 적용 가능
  - 설정과 테스트가 단순함

향후 확장 가능:

- AWS Systems Manager Parameter Store
- AWS Secrets Manager

### Request Flow

- Frontend -> Backend Proxy -> Gemini API

이 구조를 추천하는 이유:

- 프론트엔드에 API key를 직접 노출하지 않음
- 향후 프롬프트 제어와 로깅이 쉬움
- 에러 처리와 fallback 처리 위치를 백엔드로 모을 수 있음

## 4. MVP API Contract Draft

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
  "answer": "실손보험 청구 시 일반적으로 보험금 청구서, 진료비 영수증 등이 필요합니다.",
  "note": "상품과 사고 유형에 따라 추가 서류가 필요할 수 있습니다.",
  "source": "Gemini API"
}
```

## 5. Backend Minimum Scope

- 질문 입력 받기
- Gemini API 호출
- 응답 텍스트 정리
- 프론트에 JSON 반환
- 기본 에러 응답 처리

## 6. Frontend Minimum Scope

- 질문 입력창
- 전송 버튼
- 로딩 상태
- 답변 출력
- 에러 메시지 표시

## 7. Approval Points

아래 작업은 승인 대상이다.

- 외부 API 접근 허용
- Gemini API key 사용
- `.env` 파일 생성 및 환경 변수 주입
- 필요한 경우 패키지 설치

## 8. Risks

- API key 관리 미흡 시 노출 위험
- 무료 티어 한도 초과 가능성
- 응답 품질이 보험 도메인에 완전히 맞지 않을 수 있음
- 외부 네트워크 의존성 발생

## 9. Implementation Priority

1. API key 저장 방식 확정
2. 백엔드 프록시 엔드포인트 정의
3. 프론트와 API 연결
4. 기본 에러 처리
5. UI 검증

## 10. Next Step

1. `.env` 사용을 확정한다.
2. 간단한 백엔드 프록시 사용을 확정한다.
3. Gemini API 연결에 필요한 승인 항목을 정리한다.

## 11. Final MVP Decision - 2026-03-20

- API provider: `Google Gemini API`
- API key storage: `.env`
- integration shape: `Frontend -> Backend Proxy -> Gemini API`

결정 이유:

- `.env` 는 MVP 단계에서 가장 빠르게 적용 가능하다.
- 백엔드 프록시를 두면 API key를 프론트에 노출하지 않아도 된다.
- 프롬프트 제어, 에러 처리, 응답 정규화를 서버에서 묶어서 처리할 수 있다.

현재 구현 기준:

- 프론트엔드는 질문 입력과 답변 표시 담당
- 백엔드는 Gemini API 호출 담당
- 실제 운영 전환 시 key 보관 방식은 SSM 또는 Secrets Manager로 이전 가능
