# AWS Plan

## 1. Objective

- 보험 CS용 AI Agent CRM MVP를 AWS 환경에서 실행할 수 있도록 최소 구성으로 준비한다.
- 권한, 네트워크, 방화벽 변경은 MVP에 필요한 범위로 제한한다.

## 2. Principles

- 최소 권한 원칙 적용
- 최소 리소스만 사용
- 최소 네트워크 오픈
- 변경 전 승인
- 변경 후 Daily 기록

## 3. Scope

### Included

- 현재 AWS 실행 환경 확인
- 필요한 컴퓨팅 환경 결정
- 애플리케이션 실행 방식 정의
- 최소 보안그룹/포트 정책 검토

### Excluded

- 대규모 인프라 구성
- 복잡한 멀티 계정 구조
- 운영 환경 수준의 보안 고도화
- 불필요한 외부 노출

## 4. Step-by-Step Plan

### Step 1. Current Environment Check

- 현재 사용 중인 AWS 환경 확인
- 접근 가능한 리소스 확인
- 배포 또는 실행 가능한 경로 확인

### Step 2. Runtime Decision

- EC2, 컨테이너, 정적 호스팅 중 MVP에 적합한 방식 선택
- 가장 단순한 실행 구조 우선

### Step 3. Security Review

- 필요한 포트만 확인
- 불필요한 인바운드 차단
- 네트워크 접근 최소화

### Step 4. Deployment Preparation

- 코드 실행 위치 확정
- 환경 변수 필요 여부 정리
- LLM 연결이 있다면 API 접근 범위 검토

### Step 5. Verification

- 애플리케이션 정상 실행 확인
- 외부 접근 범위 확인
- 승인 범위 이상 변경이 없는지 재확인

## 5. Approval Required

- 신규 AWS 리소스 생성
- 보안그룹 변경
- 포트 오픈
- 외부 API 접근 허용
- IAM 권한 변경

## 6. Checklist

- 현재 AWS 환경 확인
- 실행 방식 결정
- 최소 보안 설정 확인
- 승인 필요 항목 정리
- Daily 기록 반영

## 7. Next Step

1. 현재 AWS 환경 상태를 확인한다.
2. MVP 실행 방식 후보를 정리한다.
3. 승인 필요한 인프라 변경 항목을 분리한다.
