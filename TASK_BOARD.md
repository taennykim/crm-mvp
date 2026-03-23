# Task Board

## 1. Purpose

- 현재 MVP 작업 상태를 빠르게 확인하기 위한 보드
- `To Do`, `In Progress`, `Done`, `Blocked` 기준으로 관리
- Daily와 메인 플랜 문서 사이의 실무용 체크리스트 역할

## 2. To Do

- UI 레퍼런스 추가 조사
- AWS에서 실제 사용할 최소 리소스 후보 정리
- Gemini API key 설정
- 패키지 설치 및 로컬 실행 확인
- 로딩/에러 상태 다듬기
- 실제 보험 질문 샘플 보강
- 승인 항목 처리 후 실제 연동 시작

## 3. In Progress

- 프론트엔드 + 백엔드 프록시 초기 구현

## 4. Done

- 전체 MVP 계획 문서 작성
- AGENT 온보딩 문서 작성
- Daily 운영 구조 정의
- 오늘자 Daily 파일 작성
- GitHub 저장소 업로드 완료 확인
- UI 레퍼런스 조사 기준 문서 작성
- UI 레퍼런스 조사 결과 초안 작성
- AWS 계획 문서 작성
- AWS 로컬 환경 점검 결과 기록
- AWS 계정 및 실행 역할 확인
- AWS 리전, IMDS, S3 접근 확인
- LLM 계획 문서 작성
- LLM 방향을 실제 API 연동으로 변경
- Gemini API를 우선 provider로 선정
- `.env` + backend proxy 구조 확정
- 프론트엔드 구현 방식 확정
- 백엔드 프록시 최소 구조 생성
- 초기 UI 및 Gemini 호출 코드 추가
- 승인 로그 문서 작성
- 와이어프레임 초안 작성
- 작업 보드 문서 작성
- 메인 플랜 문서에 파일 설명 정리

## 5. Blocked

- 없음

## 6. Notes

- UI, AWS, LLM은 병렬로 진행
- 승인 필요한 작업은 먼저 `APPROVAL_LOG.md`에 기록
- 다음날 시작 시 `AGENT.md`, 최신 Daily, 이 보드를 함께 확인

## 7. Next Update Rule

- 작업 상태가 바뀌면 이 문서를 먼저 업데이트
- 상세 내용은 Daily에 기록
- 주요 결정사항은 MVP_PLAN에도 반영 검토
