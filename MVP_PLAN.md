# CRM MVP Plan

## 1. Project Overview

- 프로젝트명: 보험 CS용 AI Agent CRM MVP
- 목표: 금융 CRM 환경에서 CS 담당자가 상담 이력을 보면서 질문을 입력하고, AI가 답변을 생성해 보여주는 단순한 MVP를 만든다.
- 범위: `상담 이력`, `질문 입력`, `AI 답변 출력` 중심의 단일 화면
- 작업 환경: AWS
- 원칙: 권한과 방화벽 변경은 최소화하고, 필요한 경우 사전 승인을 받는다.

## 2. MVP Scope

### 포함

- 상담 이력 화면
- 질문 입력창
- AI 답변 출력창
- 보험 도메인 문맥 반영
- AWS 환경에서 실행 가능한 구조

### 제외

- 고객 목록
- 고객 상세 프로필
- 복잡한 CRM 워크플로우
- 운영용 권한 체계 고도화
- 광범위한 네트워크 개방

## 3. Reference Direction

- 참고 방향: 범용 금융 CRM + CS AI Agent UI
- UI 핵심 구조:
  - 중앙: 상담 이력
  - 하단 또는 중앙 하단: 질문 입력창
  - 우측 또는 하단 우측: AI 답변 영역
- 우선 기준:
  - 복잡하지 않을 것
  - CS가 바로 사용할 수 있어 보일 것
  - Salesforce 계열의 업무용 UI 톤을 참고할 것

## 4. Workstreams

아래 3개 트랙은 병렬 진행을 기준으로 한다.

### Track A. UI 구성

- 레퍼런스 조사
- 화면 구조 확정
- 와이어프레임
- MVP 화면 구현

### Track B. AWS 환경 구성

- 배포 또는 실행 환경 결정
- 최소 권한 원칙 적용
- 필요한 리소스만 생성
- 보안그룹, 포트, 방화벽 최소 오픈

### Track C. LLM 구성

- LLM 연결 방식 결정
- 입력/출력 인터페이스 정의
- 보험 질의응답용 프롬프트 설계
- MVP 단계에서는 단순 응답 구조 우선

## 5. Step-by-Step Plan

### Step 1. 요구사항 확정

- 단순 MVP 범위를 최종 확정
- 핵심 화면 요소를 `상담이력`, `질문`, `답변`으로 고정
- AWS 진행 조건과 승인 필요 범위를 정리

### Step 2. UI 레퍼런스 조사

- 금융 CRM 및 CS AI Agent UI 레퍼런스 조사
- Salesforce 스타일에서 가져올 패턴 정리
- MVP에 맞는 최소 UI 구조 도출

### Step 3. 병렬 작업 구조 확정

- UI 구성, AWS 환경구성, LLM 구성을 병렬 트랙으로 분리
- 각 트랙별 선행조건과 산출물 정의
- 어떤 작업이 승인 대상인지 체크

### Step 4. AWS 환경 준비

- 실행 위치와 접속 경로 확인
- 최소 권한으로 필요한 리소스만 준비
- 방화벽과 보안그룹은 MVP 구동에 필요한 범위만 허용

### Step 5. LLM 연동 방식 정의

- 실제 API 연동 여부 결정
- 연동 전이라면 Mock 응답 구조 먼저 정의
- 보험 CS 질문에 대한 입력/출력 포맷 정리

### Step 6. UI 설계

- 단일 화면 레이아웃 정의
- 상담 이력 영역과 질문/답변 영역 배치
- 데스크톱 우선 MVP 화면 설계

### Step 7. 구현

- 프론트엔드 화면 구현
- LLM 응답 연결 또는 Mock 응답 연결
- AWS 환경에서 실행 확인

### Step 8. 검증

- 질문 입력부터 답변 출력까지 전체 흐름 점검
- 보험 도메인 문맥이 자연스러운지 확인
- 권한, 네트워크, 접근 경로가 최소 수준인지 재확인

### Step 9. 데일리 운영

- 매일 작업 종료 시 Daily 파일 작성
- 다음날 시작 시 이전 Daily 파일 먼저 확인
- 이전 이슈, 결정사항, 다음 액션을 이어서 반영

## 6. Approval Rules

아래 작업은 진행 전 승인 대상으로 관리한다.

- AWS 리소스 생성 또는 변경
- 외부 네트워크 접근이 필요한 설치 또는 API 연결
- 방화벽, 보안그룹, 포트 오픈
- 권한 정책 추가 또는 확장

승인 원칙:

- 필요한 작업만 요청
- 범위를 최소화해서 요청
- 요청 목적을 명확히 기록
- 승인 후 작업 결과를 Daily에 남길 것

## 7. Daily Operation Rules

- Daily 파일은 `daily/YYYY-MM-DD.md` 형식으로 생성
- 다음날 작업 시작 전 가장 최근 Daily를 확인
- 이전 결정사항을 확인한 후 연속성 있게 진행
- 작업 중 변경된 범위, 이슈, 승인 내역을 Daily에 기록

Daily 파일에 포함할 항목:

- 오늘 목표
- 진행 내용
- 결정사항
- 이슈 및 리스크
- 승인 필요 사항
- 다음 작업

## 8. Progress Tracker

| Item | Status | Notes |
| --- | --- | --- |
| MVP 범위 정의 | In Progress | 상담이력/질문/답변 중심 |
| UI 레퍼런스 조사 | Pending | Salesforce 계열 우선 |
| AWS 환경 검토 | Pending | 최소 권한 원칙 적용 |
| LLM 방식 정의 | Pending | Mock 또는 실제 연동 결정 필요 |
| Daily 운영 시작 | In Progress | 오늘자 파일 생성 예정 |

## 9. File Guide

현재 관리 중인 문서와 용도는 아래와 같다.

| File | Description |
| --- | --- |
| `MVP_PLAN.md` | 전체 MVP 범위, 단계별 계획, 병렬 작업 구조, 승인 원칙을 정리하는 메인 문서 |
| `UI_REFERENCE_PLAN.md` | UI 레퍼런스 조사를 어떤 기준으로 진행할지 정의한 문서 |
| `UI_REFERENCES.md` | 실제 UI 레퍼런스 조사 결과와 MVP 반영 방향을 기록하는 문서 |
| `WIREFRAME.md` | 실제 MVP 화면 구조와 와이어프레임 초안을 정리하는 문서 |
| `AWS_PLAN.md` | AWS 환경에서 MVP를 실행하기 위한 최소 구성, 승인 범위, 점검 항목을 정리하는 문서 |
| `LLM_PLAN.md` | 질문/답변 흐름과 Mock 또는 실제 LLM 연동 방향을 정리하는 문서 |
| `APPROVAL_LOG.md` | AWS, 네트워크, 권한, 외부 연동 등 승인 내역을 기록하는 문서 |
| `TASK_BOARD.md` | 현재 작업 상태를 To Do, In Progress, Done, Blocked 기준으로 관리하는 작업 보드 |
| `DAILY_TEMPLATE.md` | 날짜별 Daily 작업 기록을 작성할 때 사용하는 템플릿 |
| `daily/YYYY-MM-DD.md` | 날짜별 실제 작업 기록, 결정사항, 리스크, 다음 작업을 남기는 Daily 문서 |

문서 사용 순서 권장:

1. `MVP_PLAN.md`로 현재 전체 상태 확인
2. 가장 최근 `daily/YYYY-MM-DD.md` 확인
3. `TASK_BOARD.md`로 현재 작업 상태 확인
4. 필요한 세부 문서 확인
   - UI 작업: `UI_REFERENCE_PLAN.md`, `UI_REFERENCES.md`, `WIREFRAME.md`
   - AWS 작업: `AWS_PLAN.md`
   - LLM 작업: `LLM_PLAN.md`
   - 승인 확인: `APPROVAL_LOG.md`

## 10. Next Actions

1. UI 레퍼런스 조사 범위를 확정한다.
2. AWS 실행 환경의 현재 상태를 파악한다.
3. LLM을 Mock으로 시작할지 실제 API로 시작할지 결정한다.
4. 오늘자 Daily 파일을 작성하고 첫 작업 상태를 기록한다.
